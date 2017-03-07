import { PapPage } from './app.po';

describe('pap App', () => {
  let page: PapPage;

  beforeEach(() => {
    page = new PapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
