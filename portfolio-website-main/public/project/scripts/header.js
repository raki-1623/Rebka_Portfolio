// Shared Header Component
// Detects if we're in the pages/ subfolder and adjusts paths accordingly
const isSubPage = window.location.pathname.includes('/pages/');
const base = isSubPage ? '../' : './';

function renderHeader(activePage = '') {
    const headerHTML = `
    <header class="site-header">
        <div class="header-main-row">
            <a href="${base}index.html" class="logo-box">
                <span class="logo-icon">✓</span>
                <span class="logo-brand">AliExpress</span>
            </a>

            <div class="search-bar-wrapper">
                <input type="text" placeholder="Search products..." class="search-input-field">
                <div class="search-inner-actions">
                    <i class="fa-solid fa-expand camera-scan-icon"></i>
                    <button type="button" class="search-submit-button">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <div class="header-right-menu">
                <div class="nav-menu-block app-download">
                    <i class="fa-solid fa-qrcode menu-ico"></i>
                    <div class="menu-label-stack">Download the <br>AliExpress app</div>
                </div>
                <div class="nav-menu-block">
                    <img src="https://flagcdn.com/w20/et.png" alt="ET Flag" class="nav-flag-icon">
                    <div class="menu-label-stack">
                        EN/ <br>
                        <span class="currency-bold-text">ETB <i class="fa-solid fa-chevron-down arrow-dwn"></i></span>
                    </div>
                </div>
                <div class="nav-menu-block">
                    <i class="fa-regular fa-user menu-ico"></i>
                    <div class="menu-label-stack">
                        <span class="dimmed-welcome">Welcome</span> <br>
                        <span class="account-auth-text">Sign in / Register</span>
                    </div>
                </div>
                <div class="nav-menu-block cart-inline">
                    <div class="cart-badge-wrapper">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="cart-badge-number">0</span>
                    </div>
                    <span class="cart-text-label">Cart</span>
                </div>
            </div>
        </div>

        <div class="header-sub-row">
            <div class="categories-dropdown-wrapper">
                <div class="categories-capsule-btn" id="categoriesBtn">
                    <i class="fa-solid fa-bars"></i> All Categories
                    <i class="fa-solid fa-chevron-down arrow-indicator"></i>
                </div>
                <div class="categories-mega-menu" id="categoriesMegaMenu">
                    <div class="mega-menu-loading">
                        <i class="fa-solid fa-spinner fa-spin"></i> Loading categories...
                    </div>
                </div>
            </div>

            <nav class="nav-links-container">
                <a href="${base}pages/choice.html"          class="nav-link-item color-choice ${activePage === 'choice' ? 'active-nav' : ''}">Choice</a>
                <a href="${base}pages/superdeals.html"      class="nav-link-item ${activePage === 'superdeals' ? 'active-nav' : ''}">SuperDeals</a>
                <a href="${base}pages/business.html"        class="nav-link-item ${activePage === 'business' ? 'active-nav' : ''}">AliExpress Business</a>
                <a href="${base}pages/automotive.html"      class="nav-link-item ${activePage === 'automotive' ? 'active-nav' : ''}">Automotive</a>
                <a href="${base}pages/appliances.html"      class="nav-link-item ${activePage === 'appliances' ? 'active-nav' : ''}">Appliances</a>
                <a href="${base}pages/womens-clothing.html" class="nav-link-item ${activePage === 'womens' ? 'active-nav' : ''}">Women's Clothing</a>
                <a href="${base}pages/mens-clothing.html"   class="nav-link-item ${activePage === 'mens' ? 'active-nav' : ''}">Men's Clothing</a>
                <a href="#" class="nav-link-item nav-more-dropdown">More <i class="fa-solid fa-chevron-down"></i></a>
            </nav>
        </div>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    initCategoriesMenu();
}

function initCategoriesMenu() {
    const API_URL = 'http://localhost:3000/api';

    async function loadCategories() {
        try {
            const res = await fetch(`${API_URL}/categories`);
            const result = await res.json();
            if (result.success) renderCategoriesMenu(result.data);
        } catch {
            document.getElementById('categoriesMegaMenu').innerHTML =
                '<div class="mega-menu-error">Failed to load categories</div>';
        }
    }

    function renderCategoriesMenu(categories) {
        const megaMenu = document.getElementById('categoriesMegaMenu');
        megaMenu.innerHTML = categories.map(cat => `
            <div class="mega-menu-category" data-category-id="${cat.id}">
                <div class="category-main-link">
                    <i class="fa-solid ${cat.icon}"></i>
                    <span>${cat.name}</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="subcategories-panel">
                    <h4>${cat.name}</h4>
                    <div class="subcategories-grid">
                        ${cat.subcategories.map(sub => `
                            <a href="#" class="subcategory-link">
                                ${sub.name}
                                <span class="sub-count">(${sub.count.toLocaleString()})</span>
                            </a>`).join('')}
                    </div>
                </div>
            </div>`).join('');

        if (window.innerWidth <= 768) {
            document.querySelectorAll('.category-main-link').forEach(link => {
                link.addEventListener('click', e => {
                    e.stopPropagation();
                    const cat = link.closest('.mega-menu-category');
                    const wasActive = cat.classList.contains('active');
                    document.querySelectorAll('.mega-menu-category').forEach(c => c.classList.remove('active'));
                    if (!wasActive) cat.classList.add('active');
                });
            });
        }
    }

    const btn = document.getElementById('categoriesBtn');
    const menu = document.getElementById('categoriesMegaMenu');
    let open = false;

    btn.addEventListener('click', e => {
        e.stopPropagation();
        open = !open;
        menu.classList.toggle('active', open);
        btn.classList.toggle('active', open);
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.categories-dropdown-wrapper')) {
            open = false;
            menu.classList.remove('active');
            btn.classList.remove('active');
        }
    });

    loadCategories();
}
