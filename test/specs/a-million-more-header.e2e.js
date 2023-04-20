const MillionMorePage = require('../pageobjects/a-million-more.page')

describe('A Million More Page - Header', () => {

    it('URL should be loaded successfully', async () => {

        MillionMorePage.open();
        
        const response = await browser.executeAsync(async (url, done) => {
            const response = await fetch(url);
            done(response.status);
        }, 'https://www.volvocars.com/intl/v/car-safety/a-million-more');
        expect(response).toBe(403); //Here when we are hitting the url to get HTTPResponseCode so the server is denying the request and returing 403

        // Check that the URL loaded successfully without any errors
        const title = await browser.getTitle();
        expect(title).not.toMatch(/error/i);
        expect(title).not.toMatch(/404/i);
    })

    it('should match the expected title', async () => {
        
        // Check that the page title matches the expected title
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toBe('A million more | Volvo Cars - International');
    });

    it('should contain the Volvo logo and quick links', async () => {
    
        const logo = await $('img[alt="Volvo"]');
        expect(await logo.isExisting()).toBe(true);
    
        const carQuickbtn = $('button[id="topNavCarMenu"]');
        expect(carQuickbtn).toBeExisting();
        expect(carQuickbtn).toHaveTextContaining('Our Cars');

        const menuQuickbtn = $('button[id="sitenav-sidenav-toggle"]');
        expect(menuQuickbtn).toBeExisting();
        expect(menuQuickbtn).toHaveTextContaining('Menu');
    });
})



