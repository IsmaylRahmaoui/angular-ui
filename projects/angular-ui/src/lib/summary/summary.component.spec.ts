/*
 * Copyright (c) 2025 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  TestSummaryHostComponentNoID,
} from './tests/summary.component.hostcomponent.spec';
import { BaoSummaryComponent, BaoSummaryDescription } from './summary.component';

fdescribe('BaoSummaryComponent', () => {
  describe('Without ID', () => {
    let fixture: ComponentFixture<TestSummaryHostComponentNoID>;
    let summaryDebugElement: DebugElement;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          BaoSummaryComponent,
          BaoSummaryDescription,
          TestSummaryHostComponentNoID
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestSummaryHostComponentNoID);
      fixture.detectChanges();
      summaryDebugElement = fixture.debugElement.query(By.css('bao-summary'));
    });

    fit('should create a unique ID if no ID is provided', () => {
      const summaryElement = summaryDebugElement.nativeElement;
      const summaryElementId = summaryElement.getAttribute('id');
      expect(summaryElementId).toContain('bao-summary-');
      const summaryText = summaryElement.querySelector('.bao-summary-text');
      const ariaLabelledbyId = summaryText?.getAttribute('aria-labelledby');
      expect(ariaLabelledbyId).toEqual(`${summaryElementId}-arialabelledby`);
    });

    // it('should set ARIA attributes correctly when no ID is provided', () => {
    //   const summaryElement = summaryDebugElement.nativeElement;
    //   const label = summaryElement.querySelector('bao-label');
    //   const guidingText = summaryElement.querySelector('bao-guiding-text');
    //   const error = summaryElement.querySelector('bao-error');
    //   const summaryContent = summaryElement.querySelector('.bao-summary-content');

    //   expect(label?.getAttribute('id')).toContain('bao-summary-');
    //   expect(summaryContent?.getAttribute('aria-labelledby')).toBe(label?.getAttribute('id'));

    //   expect(guidingText?.getAttribute('id')).toContain('bao-summary-');
    //   expect(summaryContent?.getAttribute('aria-describedby')).toContain(guidingText?.getAttribute('id'));

    //   expect(error?.getAttribute('id')).toContain('bao-summary-');
    //   expect(summaryContent?.getAttribute('aria-describedby')).toContain(error?.getAttribute('id'));
    // });
  });

  // describe('With Explicit ID', () => {
  //   let fixture: ComponentFixture<TestSummaryHostComponentWithID>;
  //   let summaryDebugElement: DebugElement;

  //   beforeEach(waitForAsync(() => {
  //     TestBed.configureTestingModule({
  //       declarations: [
  //         BaoSummaryComponent,
  //         BaoSummaryDescription,
  //         TestSummaryHostComponentWithID
  //       ], 
  //       schemas: [CUSTOM_ELEMENTS_SCHEMA]
  //     }).compileComponents();
  //   }));

  //   beforeEach(() => {
  //     fixture = TestBed.createComponent(TestSummaryHostComponentWithID);
  //     fixture.detectChanges();
  //     summaryDebugElement = fixture.debugElement.query(By.css('bao-summary'));
  //   });

  //   it('should use the provided ID', () => {
  //     const summaryElement = summaryDebugElement.nativeElement;
  //     const summaryContent = summaryElement.querySelector('.bao-summary-content');

  //     expect(summaryElement.getAttribute('id')).toBe('testSummaryID');
  //     expect(summaryContent?.getAttribute('aria-labelledby')).toBe('testSummaryID-arialabelledby');
  //   });

  //   it('should set ARIA attributes correctly when ID is provided', () => {
  //     const summaryElement = summaryDebugElement.nativeElement;
  //     const label = summaryElement.querySelector('bao-label');
  //     const guidingText = summaryElement.querySelector('bao-guiding-text');
  //     const error = summaryElement.querySelector('bao-error');
  //     const summaryContent = summaryElement.querySelector('.bao-summary-content');

  //     expect(label?.getAttribute('id')).toBe('testSummaryID-arialabelledby');
  //     expect(summaryContent?.getAttribute('aria-labelledby')).toBe('testSummaryID-arialabelledby');

  //     expect(guidingText?.getAttribute('id')).toBe('testSummaryID-ariadescribedby-guiding-text');
  //     expect(summaryContent?.getAttribute('aria-describedby')).toContain('testSummaryID-ariadescribedby-guiding-text');

  //     expect(error?.getAttribute('id')).toBe('testSummaryID-ariadescribedby-error');
  //     expect(summaryContent?.getAttribute('aria-describedby')).toContain('testSummaryID-ariadescribedby-error');
  //   });
  // });
});
