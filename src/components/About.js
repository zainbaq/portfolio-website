// Create your About component here

// import IMG from '../assets/images/me.jpg';

const bio = "Hello, I'm Zain, a software engineer that's specilized in AI and Machine Learning.\nMy Pakistani heritage and early years spent in the UK have shaped my unique perspective on the world of technology and problem-solving. I've always had a love of mathematics and physics, which led me to study machine learning and AI at UCSD. Since then, I've worked as a Software Engineer in New York City.\nBut my passions don't end with technology - I'm also a talented soccer player and chess enthusiast. Whether I'm on the field or at the board, I approach each challenge with a calm and focused mindset, always seeking to improve and achieve my goals. I'm dedicated to sharing my knowledge and expertise with others, and often write informative tutorials on Medium. With my unwavering commitment to excellence and my ability to balance technical skill, I'm constantly inspired to push myself further and make a positive impact on the world around me. I'm honored to be a part of the diverse and ever-evolving tech community, and look forward to what the future holds."
// const paras = bio.split('\n')
const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">Welcome!<span class="cursor">&nbsp;</span></h1>
            <div className="about-info">
                {/* {
                    paras.map((para, key) => {
                        return (
                            <p className="about-desc">{para}</p>
                        )
                    })
                } */}
                <p className='about-desc'>{bio}</p>
            </div>
        </div>
    )
}

export default About;