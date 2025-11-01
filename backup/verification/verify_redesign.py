import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Construye la ruta al archivo index.html local
        file_path = "file://" + os.path.abspath("client/build/index.html")
        await page.goto(file_path)

        # Espera a que la página de la tienda se cargue y las animaciones comiencen
        await page.wait_for_selector("h1") # Espera el título "Tienda"

        # Espera un poco para que las animaciones de cascada terminen
        await page.wait_for_timeout(2000)

        # Toma la captura de pantalla
        await page.screenshot(path="jules-scratch/verification/01-tienda-rediseñada.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
