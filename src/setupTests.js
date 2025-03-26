// src/setupTests.js
import '@testing-library/jest-dom';

// Mock IntersectionObserver for Jest
global.scrollTo = jest.fn();

global.IntersectionObserver = class {
  constructor(callback) {}

  observe() {}

  unobserve() {}

  disconnect() {}
};

// Mock requestAnimationFrame for Jest (needed for animations)
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
jest.mock("react-responsive-carousel", () => ({
    Carousel: ({ children }) => <div>{children}</div>,
  }));
  