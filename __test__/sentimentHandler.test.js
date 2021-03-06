import { TestScheduler } from '@jest/core'
import { analyzeSentiment } from '../src/client/js/sentimentHandler'


test('ensure button Submit works', () => {
    document.body.innerHTML =
        '<button class="btn-submit">Submit</button>';
    const btnSubmit = document.querySelector('.btn-submit');
    btnSubmit.click();
    expect(btnSubmit.innerHTML).toBe('Submit');
});
