describe('Demo Tests',function () {

    it('My First Test', async () => { 

        browser.url('https://google.com/')
       
        await $('[name="q"]').setValue('WebdriverIO')

        // await $('[name="btnk"]').click()

        browser.keys('Enter')

        browser.pause(2000)
    })
})