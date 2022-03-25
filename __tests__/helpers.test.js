const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020')
});

test('format_plural() correctly pluralizes words', () => {
    const test1 = format_plural("Tiger", 2);
    expect(test1).toBe("Tigers");

    const test2 = format_plural("lion", 1);
    expect(test2).toBe('lion');
});

test('format_url() correctly shortens url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('http://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});