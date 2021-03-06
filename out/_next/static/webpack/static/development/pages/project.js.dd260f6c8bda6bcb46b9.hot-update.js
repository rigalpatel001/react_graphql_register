webpackHotUpdate("static/development/pages/project.js",{

/***/ "./components/Projectform.js":
/*!***********************************!*\
  !*** ./components/Projectform.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/rigalpatel/Jedcodeassignment/with-apollo/components/Projectform.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  mutation project_operations(\n    $name: String\n    $description: String\n  ) {\n    project_operations(name: $name, description: $description) {\n      name\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CREATE_PROJECT = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());
var schema = {
  name: joi_browser__WEBPACK_IMPORTED_MODULE_13___default.a.string().required().error(function (errors) {
    return {
      message: "Name is required!"
    };
  }),
  description: joi_browser__WEBPACK_IMPORTED_MODULE_13___default.a.string().required().error(function (errors) {
    return {
      message: "Description is required!"
    };
  })
};

var Projectform =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Projectform, _React$Component);

  function Projectform(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projectform);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projectform).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value));
    });

    _this.state = {
      id: "",
      name: "",
      description: "",
      errors: ""
    };

    if (props.project) {
      console.log("Found");
      _this.state = {
        id: props.project.id,
        name: props.project.name,
        description: props.project.description
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projectform, [{
    key: "validate",
    value: function validate(name, description) {
      var errors = "";
      var result = joi_browser__WEBPACK_IMPORTED_MODULE_13___default.a.validate({
        name: name,
        description: description
      }, schema);

      if (result.error) {
        errors = result.error.details[0].message;
      }

      return errors;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var input;
      var errors = this.state.errors;
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: CREATE_PROJECT,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, function (project_operations, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
          onSubmit: function onSubmit(e) {
            e.preventDefault();

            var errors = _this2.validate(e.target.name.value, e.target.description.value);

            if (errors) {
              _this2.setState({
                errors: errors
              });

              return;
            }

            if (!errors) {
              project_operations({
                variables: {
                  id: e.target.id.value,
                  name: e.target.name.value,
                  description: e.target.description.value
                }
              }).then(function () {
                return next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");
              });
            }
          },
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, errors && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, errors), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "text",
          name: "name",
          id: "name",
          placeholder: "Project Name",
          value: _this2.state.name,
          onChange: _this2.handleChange,
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          name: "description",
          id: "description",
          value: _this2.state.description,
          placeholder: "Description",
          onChange: _this2.handleChange,
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
          type: "hidden",
          name: "id",
          id: "id",
          value: _this2.state.id,
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
          type: "submit",
          className: "jsx-3122679424",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "Add Account"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
          id: "3122679424",
          __self: this
        }, "form.jsx-3122679424{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-3122679424{font-size:20px;}input.jsx-3122679424{display:block;margin-bottom:10px;}form.jsx-3122679424 button.jsx-3122679424{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWdhbHBhdGVsL0plZGNvZGVhc3NpZ25tZW50L3dpdGgtYXBvbGxvL2NvbXBvbmVudHMvUHJvamVjdGZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lnQyxBQUd5RCxBQUtqQixBQUdELEFBSUksY0FIQyxDQUhyQixHQU9BLGNBWnNCLENBU3RCLG1CQVJxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL3JpZ2FscGF0ZWwvSmVkY29kZWFzc2lnbm1lbnQvd2l0aC1hcG9sbG8vY29tcG9uZW50cy9Qcm9qZWN0Zm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSm9pIGZyb20gXCJqb2ktYnJvd3NlclwiO1xuXG5cblxuY29uc3QgQ1JFQVRFX1BST0pFQ1QgPSBncWxgXG4gIG11dGF0aW9uIHByb2plY3Rfb3BlcmF0aW9ucyhcbiAgICAkbmFtZTogU3RyaW5nXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgKSB7XG4gICAgcHJvamVjdF9vcGVyYXRpb25zKG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uKSB7XG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuYDtcblxuY29uc3Qgc2NoZW1hID0ge1xuICBuYW1lOiBKb2kuc3RyaW5nKClcbiAgICAucmVxdWlyZWQoKVxuICAgIC5lcnJvcihlcnJvcnMgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkIVwiXG4gICAgICB9O1xuICAgIH0pLFxuICAgIGRlc2NyaXB0aW9uOiBKb2kuc3RyaW5nKClcbiAgICAucmVxdWlyZWQoKVxuICAgIC5lcnJvcihlcnJvcnMgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZCFcIlxuICAgICAgfTtcbiAgICB9KVxufTtcblxuY2xhc3MgUHJvamVjdGZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICBlcnJvcnM6IFwiXCJcbiAgICAgIH07XG4gICAgICAgIGlmIChwcm9wcy5wcm9qZWN0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpZDogcHJvcHMucHJvamVjdC5pZCxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLnByb2plY3QubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5wcm9qZWN0LmRlc2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgfSAgXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICBcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgdmFsaWRhdGUobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICBsZXQgZXJyb3JzID0gXCJcIjtcbiAgICBjb25zdCByZXN1bHQgPSBKb2kudmFsaWRhdGUoXG4gICAgICB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgfSxcbiAgICAgIHNjaGVtYVxuICAgICk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgZXJyb3JzID0gcmVzdWx0LmVycm9yLmRldGFpbHNbMF0ubWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5wdXQ7XG4gICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2coIHRoaXMuc3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXV0YXRpb24gbXV0YXRpb249e0NSRUFURV9QUk9KRUNUfT5cbiAgICAgICAgICAgICAgeyhwcm9qZWN0X29wZXJhdGlvbnMsIHsgbG9hZGluZywgZXJyb3IgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuZGVzY3JpcHRpb24udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICBwcm9qZWN0X29wZXJhdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogIGUudGFyZ2V0LmlkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGUudGFyZ2V0LmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IFJvdXRlci5wdXNoKFwiL1wiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzICYmIDxwPntlcnJvcnN9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIGlkPVwiaWRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIEFjY291bnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBmb3JtIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cD5FcnJvciA6KCBQbGVhc2UgdHJ5IGFnYWluPC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTXV0YXRpb24+XG4gICAgICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Zm9ybTsiXX0= */\n/*@ sourceURL=/Users/rigalpatel/Jedcodeassignment/with-apollo/components/Projectform.js */")), loading && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, "Loading..."), error && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, "Error :( Please try again"));
      });
    }
  }]);

  return Projectform;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projectform);

/***/ })

})
//# sourceMappingURL=project.js.dd260f6c8bda6bcb46b9.hot-update.js.map