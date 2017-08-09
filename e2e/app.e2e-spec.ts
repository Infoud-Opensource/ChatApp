import { LearningPage } from './app.po';

describe('learning App', () => {
  let page: LearningPage;

  beforeEach(() => {
    page = new LearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
