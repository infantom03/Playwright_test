# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenShot.spec.js >> Store the screenshot
- Location: tests\screenShot.spec.js:28:1

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  1356 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: Login.png

Call log:
  - Expect "toHaveScreenshot(Login.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 1356 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 1356 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - combobox "Search" [active] [ref=e42]
        - generic [ref=e44]:
          - button "Search by voice" [ref=e45] [cursor=pointer]
          - button "Search by image" [ref=e48] [cursor=pointer]
      - generic [ref=e52]:
        - button "Google Search" [ref=e53] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e54] [cursor=pointer]
  - generic [ref=e55]:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - dialog "Choose Chrome, the browser built by Google":
                      - generic [ref=e65]:
                        - generic [ref=e66]:
                          - heading "Choose Chrome, the browser built by Google" [level=2] [ref=e67]
                          - generic [ref=e68]: Try a fast, secure browser with automatic updates
                        - generic [ref=e69]:
                          - button "Do not use Chrome" [ref=e70] [cursor=pointer]
                          - button "Download Chrome" [ref=e73] [cursor=pointer]
                        - generic [ref=e82]:
                          - generic [ref=e83]:
                            - text: By downloading Chrome, you agree to the
                            - link "Google Terms of Service" [ref=e84] [cursor=pointer]:
                              - /url: https://policies.google.com/terms
                            - text: and
                            - link "Chrome and ChromeOS Additional Terms of Service" [ref=e85] [cursor=pointer]:
                              - /url: https://www.google.com/chrome/terms/
                            - text: .
                          - generic [ref=e87]:
                            - checkbox "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more about automatic reports." [checked] [ref=e88]
                            - generic [ref=e89]:
                              - text: Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.
                              - link "Learn more about automatic reports" [ref=e90] [cursor=pointer]:
                                - /url: https://support.google.com/chrome/answer/96817
                              - text: .
    - generic [ref=e92]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e93] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=hi&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAV
      - link "বাংলা" [ref=e94] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=bn&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAW
      - link "తెలుగు" [ref=e95] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=te&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAX
      - link "मराठी" [ref=e96] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=mr&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAY
      - link "தமிழ்" [ref=e97] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=ta&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAZ
      - link "ગુજરાતી" [ref=e98] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=gu&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAa
      - link "ಕನ್ನಡ" [ref=e99] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=kn&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAb
      - link "മലയാളം" [ref=e100] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=ml&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAc
      - link "ਪੰਜਾਬੀ" [ref=e101] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_b9IQGOyw9Y8s5FHVkFSYZ7KFsKo%3D&hl=pa&source=homepage&sa=X&ved=2ahUKEwjhttb-wZGYAxUtkOEIHWi5A4MQ2ZgBegQIABAd
  - contentinfo [ref=e103]:
    - generic [ref=e104]: India
    - generic [ref=e105]:
      - generic [ref=e106]:
        - link "Advertising" [ref=e107] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e108] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e109] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e110]:
        - link "Privacy" [ref=e111] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e112] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e116] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | 
  4  | // test.describe.configure({ mode: 'parallel' });  // To Run this test in the parallel mode 
  5  | // test.describe.configure({ mode: 'serial'});     // TO Run this in the Serial mood if any test faile 
  6  | 
  7  | test("Screenshot & Visual comparision", async ({ page }) => {
  8  | 
  9  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  10 |     await expect(page.locator("#displayed-text")).toBeVisible();
  11 | 
  12 |     //only the element sreenshot
  13 |     await page.locator("#displayed-text").screenshot({ path: 'partialScreen.png', timeout: 15000 });
  14 | 
  15 |     await page.locator("#hide-textbox").click();
  16 | 
  17 |     //Tack full page screenshot 
  18 |     await page.screenshot({ path: 'Screenshot.png' });
  19 | 
  20 |     await expect(page.locator("#displayed-text")).toBeHidden();
  21 | 
  22 | 
  23 |     //screenshot store compare the new screenshot with old one
  24 | 
  25 | 
  26 | })
  27 | 
  28 | test("Store the screenshot", async ({ page }) => {
  29 |     await page.goto("https://www.google.com/");
> 30 |      await expect(page).toHaveScreenshot('Login.png');
     |                         ^ Error: expect(page).toHaveScreenshot(expected) failed
  31 |    // expect(await page.screenshot()).toMatchSnapshot('Login.png')    // When you run this first time it will faile beacuse Login.png not there it will faile same time it will take the snap of login page when you run this in second time it will store the snap of it then it will compare the two screenshot.
  32 | })
```