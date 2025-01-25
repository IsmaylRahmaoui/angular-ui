/*
 * Copyright (c) 2025 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

/*
 * Copyright (c) 2025 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

import { Component } from '@angular/core';

@Component({
  template: `
    <bao-summary>
      <bao-label>Test Label</bao-label>
      <bao-guiding-text>Test Guiding Text</bao-guiding-text>
      <div class="bao-summary-content">
        <bao-summary-description>Test Description</bao-summary-description>
      </div>
      <bao-error>Test Error</bao-error>
    </bao-summary>
  `
})
export class TestSummaryHostComponentNoID {}


@Component({
  template: `
    <bao-summary id="testSummaryID">
      <bao-label>Test Label</bao-label>
      <bao-guiding-text>Test Guiding Text</bao-guiding-text>
      <bao-summary-description>Test Description</bao-summary-description>
      <button bao-button>Test Button</button>
      <bao-error>Test Error</bao-error>
    </bao-summary>
  `
})
export class TestSummaryHostComponentWithID {}

@Component({
  template: `
    <bao-summary id="testSummary">
      <bao-label>Label Text</bao-label>

      <!-- Optional Property: Guiding Text -->
      <bao-guiding-text>Guiding Text for additional explanation</bao-guiding-text>

      <div class="bao-summary-content">
        <bao-summary-description>
          This is the description of the summary content.
        </bao-summary-description>
        <button bao-button>Click Me</button>
      </div>

      <!-- Optional Property: Error -->
      <bao-error>An error occurred</bao-error>
    </bao-summary>
  `
})
export class TestFullSummaryHostComponentWithID {}

@Component({
  template: `
    <bao-summary id="testSummary">
      <bao-label>Label Text</bao-label>

      <!-- Optional Property: Guiding Text -->
      <bao-guiding-text>Guiding Text for additional explanation</bao-guiding-text>

      <div class="bao-summary-content">
        <bao-summary-description>
          This is the description of the summary content.
        </bao-summary-description>
        <button bao-button>Click Me</button>
      </div>

      <!-- Optional Property: Error -->
      <bao-error>An error occurred</bao-error>
    </bao-summary>
  `
})
export class TestFullSummaryHostComponentNoID {}

// COMPACT
@Component({
  template: `
    <bao-summary>
      <bao-label>Test Label</bao-label>
      <bao-guiding-text>Test Guiding Text</bao-guiding-text>
      <div class="bao-summary-content">
        <bao-summary-description>Test Description</bao-summary-description>
      </div>
      <bao-error>Test Error</bao-error>
    </bao-summary>
  `
})
export class TestCompactSummaryHostComponentNoID {}


@Component({
  template: `
    <bao-summary id="testSummaryID">
      <bao-label>Test Label</bao-label>
      <bao-guiding-text>Test Guiding Text</bao-guiding-text>
      <bao-summary-description>Test Description</bao-summary-description>
      <button bao-button>Test Button</button>
      <bao-error>Test Error</bao-error>
    </bao-summary>
  `
})
export class TestCompactSummaryHostComponentWithID {}

@Component({
  template: `
    <bao-summary id="testSummary">
      <bao-label>Label Text</bao-label>

      <!-- Optional Property: Guiding Text -->
      <bao-guiding-text>Guiding Text for additional explanation</bao-guiding-text>

      <div class="bao-summary-content">
        <bao-summary-description>
          This is the description of the summary content.
        </bao-summary-description>
        <button bao-button>Click Me</button>
      </div>

      <!-- Optional Property: Error -->
      <bao-error>An error occurred</bao-error>
    </bao-summary>
  `
})
export class TestCompactFullSummaryHostComponentWithID {}

@Component({
  template: `
    <bao-summary id="testSummary">
      <bao-label>Label Text</bao-label>

      <!-- Optional Property: Guiding Text -->
      <bao-guiding-text>Guiding Text for additional explanation</bao-guiding-text>

      <div class="bao-summary-content">
        <bao-summary-description>
          This is the description of the summary content.
        </bao-summary-description>
        <button bao-button>Click Me</button>
      </div>

      <!-- Optional Property: Error -->
      <bao-error>An error occurred</bao-error>
    </bao-summary>
  `
})
export class TestCompactFullSummaryHostComponentNoID {}
