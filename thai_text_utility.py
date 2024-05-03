import os
import re
from pythainlp.tokenize import word_tokenize, Trie, Tokenizer
from fuzzywuzzy import fuzz
from pythainlp.util import normalize, countthai
from pythainlp.util import isthai

def read_custom_dict(file_path):
    custom_dict = set()

    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            word = line.strip()
            custom_dict.add(word)

    return custom_dict


custom_dict_file = 'MBTI/custom.txt'
custom_dict = read_custom_dict(custom_dict_file)
custom_tokenizer = Tokenizer(custom_dict=custom_dict)

def replace_rep_after(text: str) -> str:

        def _replace_rep(m):
            c, cc = m.groups()
            return f"{c}"

        re_rep = re.compile(r"(\S)(\1{3,})")
        return re_rep.sub(_replace_rep, text)

class ThaiTextUtility:

    def __init__(self):
        self.word_list = []
        self.load_dict()

    def load_dict(self):
        dict_path = ['MBTI', 'thaiword2.txt']
        dict_path = os.sep.join(dict_path)
        dict_file = open(dict_path, encoding='utf-8')
        for word in dict_file:
            word = word.rstrip()
            self.word_list.append(word)

    def lemmatize(self,text):
        text_token = normalize(text)
        text_token = replace_rep_after(text_token)
        text_token = custom_tokenizer.word_tokenize(text_token)
        text_token = [text_token for text_token in text_token if text_token.strip() != ""]
        lemmatized_words = []
        for word in text_token:
            if isthai(word):
                if word in self.word_list:
                    lemmatized_words.append(word)
                else:
                    for cursor in self.word_list:
                        fuzz_ratio = fuzz.ratio(word, cursor)
                        if fuzz_ratio > 80:
                            lemmatized_words.append(cursor)
                            break
            else:
                lemmatized_words.append(word)
        return lemmatized_words

thai_text_util = ThaiTextUtility()