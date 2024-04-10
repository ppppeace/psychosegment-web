import { IPersonality } from '@/type/personality';
const personality: IPersonality[] = [
    {
        topic: 'Analysis',
        color: 'under-line-topic-pur',
        line: 'line-pur',
        list: [
            {
                type: 'INTJ',
                image: '/mbti/INTJ.jpg',
                desc: 'Strategic Solution for INTJ : ',
                content: ['Solves complex problems', 'Data-backed, effective for long-term goals']
            },
            {
                type: 'INTP',
                image: '/mbti/INTP.jpg',
                desc: 'Intellectual Stimulation for INTPs : ',
                content: ['In-depth information on innovation', 'Encourages thoughtful discussionss']
            },
            {
                type: 'ENTP',
                image: '/mbti/ENTP.jpg',
                desc: 'Capture ENTP Innovation :',
                content: ['Groundbreaking solution presented', 'Encourages discussions on applications and future developments']
            },
            {
                type: 'ENTJ',
                image: '/mbti/ENTJ.jpg',
                desc: 'Ambitious Impact for ENTJ : ',
                content: ['Strategic tool for goal achievement', 'Emphasizes efficiency, effectiveness, and leadership impact']
            }
        ]
    },
    {
        topic: 'Diplomats',
        color: 'under-line-topic-green',
        line: 'line-green',
        list: [
            {
                type: 'INFJ',
                image: '/mbti/INFJ.jpg',
                desc: 'Inspire Change with [Product/Service] :',
                content: ['Aligns with idealistic values', 'Contributes to a greater cause for positive impact']
            },
            {
                type: 'INFP',
                image: '/mbti/INFP.jpg',
                desc: 'Emotional Connection for INFP : ',
                content: ['Stories of positive experiences', 'Aligned with values, makes a difference']
            },
            {
                type: 'ENFJ',
                image: '/mbti/ENFJ.jpg',
                desc: 'Emotional Impact for ENFJ : ',
                content: ['Success stories highlight positive impact', 'A key role in creating a better future']
            },
            {
                type: 'ENFP',
                image: '/mbti/ENFP.jpg',
                desc: 'Inspire ENFP Enthusiasm : ',
                content: ['Aligns with aspirations and values', 'Catalyst for personal growth and positive change']
            }
        ]
    },
    {
        topic: 'Sentinels',
        color: 'under-line-topic-navy',
        line: 'line-navy ',
        list: [
            {
                type: 'ISTJ',
                image: '/mbti/ISTJ.jpg',
                desc: 'Reliable Solutions for ISTJ : ',
                content: ['Clear and organized product information', 'High efficiency aligned with established standards']
            },
            {
                type: 'ISFJ',
                image: '/mbti/ISFJ.jpg',
                desc: 'Nurture with [Product/Service] : ',
                content: ['Promotes well-being and care', 'Inspiring testimonials highlight positive impacts']
            },
            {
                type: 'ESTJ',
                image: '/mbti/ESTJ.jpg',
                desc: 'Efficiency and Reliability : ',
                content: ['Industry-standard success evidenced', 'Significant impact on productivity']
            },
            {
                type: 'ESFJ',
                image: '/mbti/ESFJ.jpg',
                desc: 'Community Connection for ESFJ :',
                content: ['Showcases community well-being', 'Testimonials and group benefits foster connection']
            }
        ]
    },
    {
        topic: 'Explorers',
        color: 'under-line-topic-gold ',
        line: 'line-gold',
        list: [
            {
                type: 'ISTP',
                image: '/mbti/ISTP.jpg',
                desc: 'Practical Appeal for ISTP : ',
                content: ['Hands-on benefits showcased', 'Emphasizes functionality, durability, and lifestyle fit']
            },
            {
                type: 'ISFP',
                image: '/mbti/ISFP.jpg',
                desc: 'Artistic Appeal for ISFP : ',
                content: ['Celebrates creativity with visuals and storie', 'Evokes emotions, highlighting unique features']
            },
            {
                type: 'ESTP',
                image: '/mbti/ESTP.jpg',
                desc: 'Excite the ESTP' + "'" + 's Spirit :',
                content: ['Immediate benefits showcased', 'Real-life examples of lifestyle impact']
            },
            {
                type: 'ESFP',
                image: '/mbti/ESFP.jpg',
                desc: 'Captivate the ESFP' + "'" + 's Experience-Love:',
                content: ['Fun and social aspects highlighted', 'Vibrant visuals, positive testimonials']
            }
        ]
    }
];

export default personality;
