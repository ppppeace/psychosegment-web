import { IPersonality } from '@/type/personality';
const personality: IPersonality[] = [
    {
        topic: 'Analysis',
        color: '#800080',
        list: [
            {
                type: 'INTJ',
                image: '/square.png',
                desc: 'Strategic Solution for INTJ : ',
                content: ['Solves complex problems', 'Data-backed, effective for long-term goals']
            },
            {
                type: 'INTP',
                image: '/square.png',
                desc: 'Intellectual Stimulation for INTPs : ',
                content: ['In-depth information on innovation', 'Encourages thoughtful discussionss']
            },
            {
                type: 'ENTP',
                image: '/square.png',
                desc: 'Capture ENTP Innovation :',
                content: ['Groundbreaking solution presented', 'Encourages discussions on applications and future developments']
            },
            {
                type: 'ENTJ',
                image: '/square.png',
                desc: 'Ambitious Impact for ENTJ : ',
                content: ['Strategic tool for goal achievement', 'Emphasizes efficiency, effectiveness, and leadership impact']
            }
        ]
    },
    {
        topic: 'Diplomats',
        color: 'decoration-[var(--green)]',
        list: [
            {
                type: 'INFJ',
                image: '/square.png',
                desc: 'Inspire Change with [Product/Service] :',
                content: ['Aligns with idealistic values', 'Contributes to a greater cause for positive impact']
            },
            {
                type: 'INFP',
                image: '/square.png',
                desc: 'Emotional Connection for INFP : ',
                content: ['Stories of positive experiences', 'Aligned with values, makes a difference']
            },
            {
                type: 'ENFJ',
                image: '/square.png',
                desc: 'Emotional Impact for ENFJ : ',
                content: ['Success stories highlight positive impact', 'A key role in creating a better future']
            },
            {
                type: 'ENFP',
                image: '/square.png',
                desc: 'Inspire ENFP Enthusiasm : ',
                content: ['Aligns with aspirations and values', 'Catalyst for personal growth and positive change']
            }
        ]
    },
    {
        topic: 'Sentinels',
        color: 'decoration-[var(--navy)]',
        list: [
            {
                type: 'ISTJ',
                image: '/square.png',
                desc: 'Reliable Solutions for ISTJ : ',
                content: ['Clear and organized product information', 'High efficiency aligned with established standards']
            },
            {
                type: 'ISFJ',
                image: '/square.png',
                desc: 'Nurture with [Product/Service] : ',
                content: ['Promotes well-being and care', 'Inspiring testimonials highlight positive impacts']
            },
            {
                type: 'ESTJ',
                image: '/square.png',
                desc: 'Efficiency and Reliability : ',
                content: ['Industry-standard success evidenced', 'Significant impact on productivity']
            },
            {
                type: 'ESFJ',
                image: '/square.png',
                desc: 'Community Connection for ESFJ :',
                content: ['Showcases community well-being', 'Testimonials and group benefits foster connection']
            }
        ]
    },
    {
        topic: 'Explorers',
        color: 'decoration-[var(--gold)]',
        list: [
            {
                type: 'ISTP',
                image: '/square.png',
                desc: 'Practical Appeal for ISTP : ',
                content: ['Hands-on benefits showcased', 'Emphasizes functionality, durability, and lifestyle fit']
            },
            {
                type: 'ISFP',
                image: '/square.png',
                desc: 'Artistic Appeal for ISFP : ',
                content: ['Celebrates creativity with visuals and storie', 'Evokes emotions, highlighting unique features']
            },
            {
                type: 'ESTP',
                image: '/square.png',
                desc: 'Excite the ESTP' + "'" + 's Spirit :',
                content: ['Immediate benefits showcased', 'Real-life examples of lifestyle impact']
            },
            {
                type: 'ESFP',
                image: '/square.png',
                desc: 'Captivate the ESFP' + "'" + 's Experience-Love:',
                content: ['Fun and social aspects highlighted', 'Vibrant visuals, positive testimonials']
            }
        ]
    }
];

export default personality;
