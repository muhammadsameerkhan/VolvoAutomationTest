const carSafetyPage = require('./car-safety-page');

class MillionMorePage extends carSafetyPage {

    open () {
        return super.open('a-million-more');
    }
}

module.exports = new MillionMorePage();