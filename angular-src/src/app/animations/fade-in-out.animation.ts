// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
let duration=0.3;
export const fadeInOut =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fadeInOut', [

       // end state styles for route container (host)
       state('*', style({
           // the view covers the whole screen with a semi tranparent background
           position: 'fixed',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           backgroundColor: 'rgba(0, 0, 0, 0.8)',
           zIndex: 99999
       })),

       // route 'enter' transition
       transition(':enter', [

           // styles at start of transition
           style({
               // start with the content positioned off the top of the screen,
               // -400% is required instead of -100% because the negative position adds to the width of the element
               opacity: '0',

               // start with background opacity set to 0 (invisible)
               backgroundColor: 'rgba(0, 0, 0, 0)'
           }),

           // animation and styles at end of transition
           animate(duration+'s ease-in-out', style({
               // transition the top position to 0 which slides the content into view
               opacity: 1,

               // transition the background opacity to 0.8 to fade it in
               backgroundColor: 'rgba(0, 0, 0, 0.8)'
           }))
       ]),

       // route 'leave' transition
       transition(':leave', [
           // animation and styles at end of transition
           animate(duration+'s ease-in-out', style({
               // transition the top position to -400% which slides the content out of view
               opacity: '0',

               // transition the background opacity to 0 to fade it out
               backgroundColor: 'rgba(0, 0, 0, 0)'
           }))
       ])
   ]);

// // import the required animation functions from the angular animations module
// import { trigger, state, animate, transition, style } from '@angular/animations';

// export const fadeInAnimation =
//    // trigger name for attaching this animation to an element using the [@triggerName] syntax
//    trigger('fadeInAnimation', [

//        // route 'enter' transition
//        transition(':enter', [

//            // css styles at start of transition
//            style({ opacity: 0 }),

//            // animation and styles at end of transition
//            animate('.3s', style({ opacity: 1 }))
//        ]),
//    ]);