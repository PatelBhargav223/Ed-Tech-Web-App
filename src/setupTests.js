import { vi } from "vitest";
import "@testing-library/jest-dom";

// Polyfill for global
global.window = global;

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    removeItem: (key) => delete store[key],
    clear: () => (store = {}),
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Mock window.Razorpay
Object.defineProperty(window, "Razorpay", {
  value: vi.fn().mockImplementation(() => ({
    open: vi.fn(),
    on: vi.fn(),
  })),
});

// Mock react-super-responsive-table
vi.mock("react-super-responsive-table", () => ({
  Table: ({ children }) => <table>{children}</table>,
  Thead: ({ children }) => <thead>{children}</thead>,
  Tbody: ({ children }) => <tbody>{children}</tbody>,
  Tr: ({ children }) => <tr>{children}</tr>,
  Th: ({ children }) => <th>{children}</th>,
  Td: ({ children }) => <td>{children}</td>,
}));

// Mock apiConnector
vi.mock("./services/apiConnector", () => ({
  apiConnector: vi.fn().mockImplementation((method, url) => {
    if (url.includes("/course/getReviews")) {
      return Promise.resolve({
        data: {
          success: true,
          data: [
            {
              id: 1,
              user: { firstName: "John", lastName: "Doe", image: null },
              course: { courseName: "Test Course" },
              review: "Great course, very informative!",
              rating: 4.5,
            },
            {
              id: 2,
              user: { firstName: "Jane", lastName: "Smith", image: null },
              course: { courseName: "Test Course 2" },
              review: "Really enjoyed it!",
              rating: 4.0,
            },
          ],
        },
      });
    }
    if (url.includes("/course/showAllCategories")) {
      return Promise.resolve({
        data: {
          success: true,
          data: [
            { _id: "1", name: "Category 1" },
            { _id: "2", name: "Category 2" },
          ],
        },
      });
    }
    if (
      url.includes("/payment/capturePayment") ||
      url.includes("/payment/verifyPayment") ||
      url.includes("/payment/sendPaymentSuccessEmail")
    ) {
      return Promise.resolve({
        data: {
          success: true,
          data: { id: "mock_order_id", amount: 1000, currency: "INR" },
        },
      });
    }
    if (
      url.includes("/auth/sendotp") ||
      url.includes("/auth/signup") ||
      url.includes("/auth/login") ||
      url.includes("/auth/reset-password-token") ||
      url.includes("/auth/reset-password") ||
      url.includes("/profile/getUserDetails") ||
      url.includes("/profile/getEnrolledCourses") ||
      url.includes("/profile/instructorDashboard") ||
      url.includes("/course/getAllCourses") ||
      url.includes("/course/getCourseDetails") ||
      url.includes("/course/editCourse") ||
      url.includes("/course/createCourse") ||
      url.includes("/course/addSection") ||
      url.includes("/course/addSubSection") ||
      url.includes("/course/updateSection") ||
      url.includes("/course/updateSubSection") ||
      url.includes("/course/getInstructorCourses") ||
      url.includes("/course/deleteSection") ||
      url.includes("/course/deleteSubSection") ||
      url.includes("/course/deleteCourse") ||
      url.includes("/course/getFullCourseDetails") ||
      url.includes("/course/updateCourseProgress") ||
      url.includes("/course/createRating") ||
      url.includes("/course/getCategoryPageDetails") ||
      url.includes("/reach/contact") ||
      url.includes("/profile/updateDisplayPicture") ||
      url.includes("/profile/updateProfile") ||
      url.includes("/auth/changepassword") ||
      url.includes("/profile/deleteProfile")
    ) {
      return Promise.resolve({
        data: {
          success: true,
          data: {},
        },
      });
    }
    return Promise.resolve({ data: { success: false, data: [] } });
  }),
}));

// Mock all exports from apis.js
vi.mock("./services/apis", () => ({
  endpoints: {
    SENDOTP_API: "/auth/sendotp",
    SIGNUP_API: "/auth/signup",
    LOGIN_API: "/auth/login",
    RESETPASSTOKEN_API: "/auth/reset-password-token",
    RESETPASSWORD_API: "/auth/reset-password",
  },
  profileEndpoints: {
    GET_USER_DETAILS_API: "/profile/getUserDetails",
    GET_USER_ENROLLED_COURSES_API: "/profile/getEnrolledCourses",
    GET_INSTRUCTOR_DATA_API: "/profile/instructorDashboard",
  },
  studentEndpoints: {
    COURSE_PAYMENT_API: "/payment/capturePayment",
    COURSE_VERIFY_API: "/payment/verifyPayment",
    SEND_PAYMENT_SUCCESS_EMAIL_API: "/payment/sendPaymentSuccessEmail",
  },
  courseEndpoints: {
    GET_ALL_COURSE_API: "/course/getAllCourses",
    COURSE_DETAILS_API: "/course/getCourseDetails",
    EDIT_COURSE_API: "/course/editCourse",
    COURSE_CATEGORIES_API: "/course/showAllCategories",
    CREATE_COURSE_API: "/course/createCourse",
    CREATE_SECTION_API: "/course/addSection",
    CREATE_SUBSECTION_API: "/course/addSubSection",
    UPDATE_SECTION_API: "/course/updateSection",
    UPDATE_SUBSECTION_API: "/course/updateSubSection",
    GET_ALL_INSTRUCTOR_COURSES_API: "/course/getInstructorCourses",
    DELETE_SECTION_API: "/course/deleteSection",
    DELETE_SUBSECTION_API: "/course/deleteSubSection",
    DELETE_COURSE_API: "/course/deleteCourse",
    GET_FULL_COURSE_DETAILS_AUTHENTICATED: "/course/getFullCourseDetails",
    LECTURE_COMPLETION_API: "/course/updateCourseProgress",
    CREATE_RATING_API: "/course/createRating",
  },
  ratingsEndpoints: {
    REVIEWS_DETAILS_API: "/course/getReviews",
  },
  categories: {
    CATEGORIES_API: "/course/showAllCategories",
  },
  catalogData: {
    CATALOGPAGEDATA_API: "/course/getCategoryPageDetails",
  },
  contactusEndpoint: {
    CONTACT_US_API: "/reach/contact",
  },
  settingsEndpoints: {
    UPDATE_DISPLAY_PICTURE_API: "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: "/profile/updateProfile",
    CHANGE_PASSWORD_API: "/auth/changepassword",
    DELETE_PROFILE_API: "/profile/deleteProfile",
  },
}));
