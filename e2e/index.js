import { Selector } from 'testcafe';

fixture`index`
    .page`http://localhost:3002/`;


test('Test click button', async t => {
    await t
        .click('#button')
        .expect(Selector('#alert').innerText).eql('Button is clicked!');;
});
