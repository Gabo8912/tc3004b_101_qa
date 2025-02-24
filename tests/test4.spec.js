// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test4', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test4', async function() {
    await driver.get("http://127.0.0.1:5500/")
    await driver.manage().window().setRect({ width: 1500, height: 952 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("5")
    await driver.findElement(By.id("num2")).sendKeys("2")
    await driver.findElement(By.id("buttonSub")).click()
    await driver.findElement(By.id("buttonRes")).click()
  })
})
