from playwright.sync_api import sync_playwright

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to the home page...")
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="jules-scratch/verification/01-home-page.png")
        print("Home page screenshot taken.")

        print("Navigating to the store page...")
        page.goto("http://localhost:3000/store")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="jules-scratch/verification/02-store-page.png")
        print("Store page screenshot taken.")

        print("Navigating to the Mundo LBC page...")
        page.goto("http://localhost:3000/mundo-lbc")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="jules-scratch/verification/03-mundo-lbc-page.png")
        print("Mundo LBC page screenshot taken.")

        print("Navigating to the Gift Card page...")
        page.goto("http://localhost:3000/gift-card")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="jules-scratch/verification/04-gift-card-page.png")
        print("Gift Card page screenshot taken.")

        print("Testing add to cart functionality...")
        page.goto("http://localhost:3000/store")
        page.wait_for_load_state("networkidle")
        page.get_by_role("link", name="Taza Rústica Azul").click()
        page.wait_for_load_state("networkidle")
        page.get_by_role("button", name="Add To Cart").click()
        page.wait_for_load_state("networkidle")
        page.goto("http://localhost:3000/cart")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="jules-scratch/verification/05-cart-page.png")
        print("Cart page screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run_verification()
