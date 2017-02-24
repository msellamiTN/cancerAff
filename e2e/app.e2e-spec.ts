import { CancerAffPage } from './app.po';

describe('cancer-aff App', () => {
  let page: CancerAffPage;

  beforeEach(() => {
    page = new CancerAffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
