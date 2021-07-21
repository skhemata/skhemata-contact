import { css } from '@skhemata/skhemata-base';

export const SkhemataContactStyles = css`
/* ==========================================================================
6. Material Inputs
========================================================================== */
.control-material {
  position: relative;
  margin-bottom: 2em; }
  .control-material input, .control-material textarea {
    border-radius: 0 !important; }
  .control-material.is-primary input.material-input:focus ~ label,
  .control-material.is-primary input:valid ~ label,
  .control-material.is-primary textarea:valid ~ label,
  .control-material.is-primary textarea:focus ~ label {
    color: #1976d2; }
  .control-material.is-primary .material-input:focus ~ .caret-icon i {
    color: #1976d2; }
  .control-material.is-primary .bar:before, .control-material.is-primary .bar:after {
    background: #1976d2; }
  .control-material.is-primary.has-icon input:focus ~ i {
    color: #1976d2 !important; }
  .control-material.is-primary .dropdown-list .option.selected {
    background: #1976d2;
    color: #fcfcfc; }
  .control-material.is-secondary input.material-input:focus ~ label,
  .control-material.is-secondary input:valid ~ label,
  .control-material.is-secondary textarea:focus ~ label {
    color: #00468b; }
  .control-material.is-secondary .material-input:focus ~ .caret-icon i {
    color: #00468b; }
  .control-material.is-secondary .bar:before, .control-material.is-secondary .bar:after {
    background: #00468b; }
  .control-material.is-secondary.has-icon input:focus ~ i {
    color: #00468b !important; }
  .control-material.is-secondary .dropdown-list .option.selected {
    background: #00468b;
    color: #fcfcfc; }
  .control-material.is-accent input.material-input:focus ~ label,
  .control-material.is-accent input:valid ~ label,
  .control-material.is-accent textarea:focus ~ label {
    color: #ffc107; }
  .control-material.is-accent .material-input:focus ~ .caret-icon i {
    color: #ffc107; }
  .control-material.is-accent .bar:before, .control-material.is-accent .bar:after {
    background: #ffc107; }
  .control-material.is-accent.has-icon input:focus ~ i {
    color: #ffc107 !important; }
  .control-material.is-accent .dropdown-list .option.selected {
    background: #ffc107;
    color: #fcfcfc; }
  .control-material.is-light input.material-input:focus ~ label,
  .control-material.is-light input:valid ~ label,
  .control-material.is-light textarea:focus ~ label {
    color: #fff; }
  .control-material.is-light .bar:before, .control-material.is-light .bar:after {
    background: #fff; }
  .control-material.is-light.has-icon input:focus ~ i {
    color: #fff !important; }
  .control-material .material-input, .control-material textarea {
    width: 100% !important;
    font-size: 18px;
    padding: 0.625em  0.625em 0.625em 0.3125em;
    display: block;
    width: 18.75em;
    border: none;
    border-bottom: 1px solid #A9ABAC;
    background-color: transparent !important; }
    .control-material .material-input:focus, .control-material textarea:focus {
      outline: none; }
  .control-material label {
    font-family: 'Arial';
    color: #cecece;
    font-size: 15px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: 1em;
    left: 0.3125em;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all; }
  .control-material .material-input:focus ~ label,
  .control-material input:valid ~ label,
  .control-material textarea:focus ~ label,
  .control-material textarea:valid ~ label {
    top: -8px;
    left: -2px;
    font-size: 12px; }
  .control-material .bar {
    position: relative;
    display: block; }
    .control-material .bar:before, .control-material .bar:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all; }
    .control-material .bar:before {
      left: 50%; }
    .control-material .bar:after {
      right: 50%; }
  .control-material .material-input:focus ~ .bar:before,
  .control-material input.material-input:focus ~ .bar:after,
  .control-material textarea:focus ~ .bar:before,
  .control-material textarea:focus ~ .bar:after {
    width: 50%; }
  .control-material.has-icon {
    position: relative; }
    .control-material.has-icon input {
      padding-right: 54px; }
      .control-material.has-icon input:focus ~ i, .control-material.has-icon input:valid ~ i {
        margin-top: 10px; }
    .control-material.has-icon i {
      position: absolute;
      right: 15px;
      top: 12px;
      color: #cecece;
      transition: all .3s; }
  .control-material.required {
    position: relative; }
    .control-material.required input {
      padding-right: 54px; }
    .control-material.required i {
      position: absolute;
      right: 15px;
      top: 12px;
      color: #cecece;
      display: none; }
    .control-material.required .validation-info {
      display: none;
      font-size: 0.8rem; }
    .control-material.required.has-success input {
      border-bottom-color: #00b289 !important; }
    .control-material.required.has-success .bar:after, .control-material.required.has-success .bar:before {
      background: #00b289 !important; }
    .control-material.required.has-success .success i {
      color: #00b289 !important;
      display: block; }
    .control-material.required.has-success label {
      color: #00b289 !important; }
    .control-material.required.has-success small.validation-info.success {
      color: #00b289;
      display: block; }
    .control-material.required.has-error input {
      border-bottom-color: #FF7273 !important; }
    .control-material.required.has-error .bar:after, .control-material.required.has-error .bar:before {
      background: #FF7273 !important; }
    .control-material.required.has-error .error i {
      color: #FF7273 !important;
      display: block; }
    .control-material.required.has-error label {
      color: #FF7273 !important; }
    .control-material.required.has-error small.validation-info.error {
      color: #FF7273;
      display: block; }
  .control-material .material-select.is-active .dropdown-list {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all; }
  .control-material .material-select.has-value .inner-wrap label {
    top: -20px;
    left: -2px;
    font-size: 12px; }
  .control-material .material-select .inner-wrap .caret-icon {
    position: absolute;
    top: 10px;
    right: 0;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s; }
    .control-material .material-select .inner-wrap .caret-icon i {
      color: #999; }
  .control-material .material-select .material-input:focus {
    pointer-events: none !important; }
    .control-material .material-select .material-input:focus ~ .caret-icon {
      transform: rotate(180deg); }
  .control-material .material-select .dropdown-list {
    background: #fff;
    border: 1px solid #ededed;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 15px;
    z-index: 2;
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none; }
    .control-material .material-select .dropdown-list .option {
      font-size: 12px;
      cursor: pointer;
      padding: 10px; }
      .control-material .material-select .dropdown-list .option:hover:not(.selected) {
        background: #ededed; }
        .button.accent-btn {
          outline: none;
          border-color: #ffc107;
          background-color: #ffc107;
          color: #fff;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
        .button.is-bold {
          font-weight: 600;
        }
        .button.button-cta {
          padding: 22px 40px !important;
        }
        .button.no-lh {
          line-height: 0 !important;
        }
        .button.rounded {
          border-radius: 500px;
        }
  .thank-you {
    font-family: arial;
  }
  .panel-heading.white {
    background-color: transparent;
  }

  .panel-block-heading {
    padding: 0;
    justify-content: center;
    text-align: center;
  }

  .panel-block-content {
    display: block;
    padding: 2rem;
  }

  .contact-panel {
    background-color: white;
  }
`;
