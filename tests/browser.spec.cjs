#!/usr/bin/env node
const { test, expect } = require('@playwright/test');
const pages=[
 ['visao','Visão geral'],['oportunidades','Oportunidades'],['pautas','Pautas'],
 ['matriz','Matriz'],['dados','Dados & Bases'],['ferramentas','Ferramentas'],
 ['pipeline','Pipeline'],['calendario','Calendário'],['arquivo','Arquivo'],
 ['metodologia','Metodologia']
];
for (const [hash,label] of pages) {
 test(label+' renders without runtime errors',async ({page})=>{
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/#'+hash);
  await expect(page.locator('#app')).not.toBeEmpty();
  expect(errors).toEqual([]);
 });
}
test('mobile menu opens and closes after navigation',async ({page,isMobile})=>{
 test.skip(!isMobile,'Mobile-only interaction');
 await page.goto('/#visao');
 const menu=page.locator('#menu');
 await expect(menu).toBeVisible();
 await menu.click();
 await expect(menu).toHaveAttribute('aria-expanded','true');
 await page.locator('#nav a[href="#dados"]').click();
 await expect(menu).toHaveAttribute('aria-expanded','false');
 await expect(page.locator('#app')).not.toBeEmpty();
});
test('no horizontal overflow on core pages',async ({page})=>{
 for (const hash of ['visao','oportunidades','dados','ferramentas','pautas']) {
  await page.goto('/#'+hash);
  const dims=await page.evaluate(()=>({viewport:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
  expect(dims.scroll,hash+' horizontal overflow').toBeLessThanOrEqual(dims.viewport+2);
 }
});
