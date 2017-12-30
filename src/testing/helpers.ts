/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
import {DebugElement} from '@angular/core';
import {tick} from '@angular/core/testing';

export const ButtonClickEvents = {
  left:  { button: 0 },
  right: { button: 2 }
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
