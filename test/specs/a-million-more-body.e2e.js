const MillionMorePage = require('../pageobjects/a-million-more.page')

describe('A Million More Page - Body', () => {

    it('Model Intro section should contain proper text and heading', () => {

        MillionMorePage.open();

        const sectionHeading = $('#ModelIntro-1 section h2');
        expect(sectionHeading).toBeExisting();
        expect(sectionHeading).toHaveTextContaining('Ideas that change the world are often the most controversial.')

        const sectionText = $('#ModelIntro-1 section p');
        expect(sectionText).toBeExisting();
        expect(sectionText).toHaveTextContaining("After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety.")
    });

    it('video should be preloaded when the page opens and should be in a loop and muted also', () => {

        const video = $('video');
        expect(video).toBeDisplayed();
        expect(video).toHaveAttribute('autoplay');
        expect(video).toHaveAttribute('loop');
        expect(video).toHaveAttribute('muted');

    });

    it('should pause the video when pause button is clicked', () => {

        const video = $('video');

        const pauseBtn = $('button[aria-label="pause"]');
        const playBtn = $('button[aria-label="play"]');
        expect(pauseBtn).toBeExisting();
        pauseBtn.click();

        expect(video).toHaveAttribute('paused');
        expect(playBtn).toBeExisting();
        playBtn.click();
        expect(video).not.toHaveAttribute('paused');

    });

    it('should reload the video when the "Watch the Story" button is clicked', () => {

        const video = $('video');
        const watchStoryButton = $('#Video-1 button span');
        expect(video.toHaveAttribute('src')).toHaveTextContaining('https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero_16x9_loop_clean.mp4'); // Verify that the video tag has a new src attribute
        
        watchStoryButton.click();

        const divIframe = $('#Video-1 iframe');
        expect(divIframe).toBeExisting();
        expect(divIframe).toHaveAttribute('src');
        expect(divIframe.getAttribute('src')).toHaveTextContaining('https://www.youtube.com/embed/fj_WFwVOYn8');
    });

    /* Note:
    I hope you will find the best candidate for this position, but from my side I can do a far more better than this. I believe I am 
    a fast learner and this test is a result of my one day learning. I am sorry to tell you but I dont have any experience in testing
    before this test. I have been working as a .Net full stack developer since last 3 years. Ah! I know this is easy for everyone to say
    but I can proof myself if you give my a little bit more time. Apologies for taking your extra consideration but atleast this test 
    shows my real dedication of learning and growing and motivation to get hired in Volvo. May be you can realize my efforts. Thanks */
})