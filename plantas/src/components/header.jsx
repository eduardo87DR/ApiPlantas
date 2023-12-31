import React from 'react'

function Header() {
  return (
    <div>
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
  <button
    className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
    id="bd-theme"
    type="button"
    aria-expanded="false"
    data-bs-toggle="dropdown"
    aria-label="Toggle theme (auto)"
  >
    <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
      <use href="#circle-half" />
    </svg>
    <span className="visually-hidden" id="bd-theme-text">
      Toggle theme
    </span>
  </button>
  <ul
    className="dropdown-menu dropdown-menu-end shadow"
    aria-labelledby="bd-theme-text"
  >
    <li>
      <button
        type="button"
        className="dropdown-item d-flex align-items-center"
        data-bs-theme-value="light"
        aria-pressed="false"
      >
        <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
          <use href="#sun-fill" />
        </svg>
        Light
        <svg className="bi ms-auto d-none" width="1em" height="1em">
          <use href="#check2" />
        </svg>
      </button>
    </li>
    <li>
      <button
        type="button"
        className="dropdown-item d-flex align-items-center"
        data-bs-theme-value="dark"
        aria-pressed="false"
      >
        <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
          <use href="#moon-stars-fill" />
        </svg>
        Dark
        <svg className="bi ms-auto d-none" width="1em" height="1em">
          <use href="#check2" />
        </svg>
      </button>
    </li>
    <li>
      <button
        type="button"
        className="dropdown-item d-flex align-items-center active"
        data-bs-theme-value="auto"
        aria-pressed="true"
      >
        <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
          <use href="#circle-half" />
        </svg>
        Auto
        <svg className="bi ms-auto d-none" width="1em" height="1em">
          <use href="#check2" />
        </svg>
      </button>
    </li>
  </ul>
</div>

      <header data-bs-theme="dark">
  <div className="collapse text-bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4>About</h4>
          <p className="text-body-secondary">
            Add some information about the album below, the author, or any other
            background context. Make it a few sentences long so folks can pick
            up some informative tidbits. Then, link them off to some social
            networking sites or contact information.
          </p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4>Contact</h4>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-white">
                Follow on Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Like on Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Email me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container">
      <a href="#" className="navbar-brand d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          aria-hidden="true"
          className="me-2"
          viewBox="0 0 24 24"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx={12} cy={13} r={4} />
        </svg>
        <strong>Album</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarHeader"
        aria-controls="navbarHeader"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </div>
</header>

    </div>
  )
}

export default Header
