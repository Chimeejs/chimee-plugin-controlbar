import Chimee from 'chimee';
import chimeePluginControlbar from '../../src/index';

document.body.innerHTML = `
  <div id="wrap"></div>
`;
Chimee.install(chimeePluginControlbar);

const player = new Chimee({
  wrapper: '#wrap',
  src: 'http://yunxianchang.live.ujne7.com/vod-system-bj/103_371ab0c0fda-143d-4755-8727-d3cd12dce02d.mp4',
  isLive: false,
  majorColor: '#f00',
  hoverColor: '#00f',
  plugin: [
    {
      name: chimeePluginControlbar.name,
      majorColor: '#f00',
      hoverColor: '#fff',
      children: {
        play: {},
        progressTime: true,
        progressBar: {
          layout: 'top' // baseline
        },
        volume: {
          icon: {
            low: `
              <svg width="32px" height="25px" viewBox="0 0 32 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="#ffffff" fill-rule="evenodd">
                  <g >
                      <path d="M12.070967,0.619075265 L6.03548348,5.77441263 L3.01774174,5.77441263 C1.42010121,5.77441263 0,7.10769585 0,8.79650906 L0,16.3517501 C0,18.0405633 1.33136203,19.3738465 3.01774174,19.3738465 L5.6804658,19.3738465 L12.070967,24.4403167 C13.5798378,25.5958044 15,24.8847444 15,23.0181357 L15,2.04122572 C15,0.0857497703 13.4910377,-0.625310199 12.070967,0.619075265 L12.070967,0.619075265 Z M12,20.6066981 C12,21.0894717 11.9333694,21.0894717 11.6000336,20.8136078 L6.66667175,16.8134161 C6.60001831,16.744462 6.46668854,16.6754842 6.33333588,16.6754842 L4.1333374,16.6754842 C3.53334198,16.6754842 3,16.1237802 3,15.5030273 L3,9.64074278 C3,9.02003726 3.53331909,8.46828587 4.1333374,8.46828587 L6.60001831,8.46828587 C6.73334808,8.46828587 6.86667786,8.39930807 6.93335419,8.33035394 L11.6000336,4.19227771 C11.9333923,3.91639017 11.9333923,3.91639017 11.9333923,4.33020964 L11.9333923,20.6066981 L12,20.6066981 L12,20.6066981 Z"></path>
                  </g>
                  <g>
                    <path d="M19,3 C24.0142824,3.26000646 28,7.40808008 28,12.4870679 C28,17.5660558 24.0142824,21.7141294 19,21.9741359 L19,18.9870679 C22.3137085,18.9870679 25,16.3007764 25,12.9870679 C25,9.67335944 22.3137085,6.98706794 19,6.98706794 L19,3 Z" id="Combined-Shape"></path>            
                  </g>
                </g>
              </svg>
            `,
            mute: `
              <svg width="32px" height="25px" viewBox="0 0 32 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="#ffffff" fill-rule="evenodd">
                  <g >
                      <path d="M12.070967,0.619075265 L6.03548348,5.77441263 L3.01774174,5.77441263 C1.42010121,5.77441263 0,7.10769585 0,8.79650906 L0,16.3517501 C0,18.0405633 1.33136203,19.3738465 3.01774174,19.3738465 L5.6804658,19.3738465 L12.070967,24.4403167 C13.5798378,25.5958044 15,24.8847444 15,23.0181357 L15,2.04122572 C15,0.0857497703 13.4910377,-0.625310199 12.070967,0.619075265 L12.070967,0.619075265 Z M12,20.6066981 C12,21.0894717 11.9333694,21.0894717 11.6000336,20.8136078 L6.66667175,16.8134161 C6.60001831,16.744462 6.46668854,16.6754842 6.33333588,16.6754842 L4.1333374,16.6754842 C3.53334198,16.6754842 3,16.1237802 3,15.5030273 L3,9.64074278 C3,9.02003726 3.53331909,8.46828587 4.1333374,8.46828587 L6.60001831,8.46828587 C6.73334808,8.46828587 6.86667786,8.39930807 6.93335419,8.33035394 L11.6000336,4.19227771 C11.9333923,3.91639017 11.9333923,3.91639017 11.9333923,4.33020964 L11.9333923,20.6066981 L12,20.6066981 L12,20.6066981 Z"></path>
                  </g>
                  <g transform="translate(25.606602, 12.606602) rotate(-45.000000) translate(-25.606602, -12.606602) translate(18.106602, 5.106602)">
                      <rect id="Rectangle-5" x="-1.4033219e-13" y="6" width="15" height="3"></rect>
                      <rect id="Rectangle-5-Copy" transform="translate(7.500000, 7.500000) rotate(-90.000000) translate(-7.500000, -7.500000) " x="-2.06057393e-13" y="6" width="15" height="3"></rect>
                  </g>
                </g>
              </svg>
            `,
          },
          layout: 'vertical'
        },
        clarity: [
          {name: '标清', src: 'http://yunxianchang.live.ujne7.com/vod-system-bj/103_368b70a5d4f-c5cc-42ff-b442-004168fc86a3.mp4'},
          {name: '高清', src: 'http://yunxianchang.live.ujne7.com/vod-system-bj/103_369ed890f51-1c38-42a7-9ce2-828492660c60.mp4'},
          {name: '原画', src: 'http://yunxianchang.live.ujne7.com/vod-system-bj/103_371ab0c0fda-143d-4755-8727-d3cd12dce02d.mp4'}
        ],
        screen: true
      }
    }
  ],
  controls: true,
  autoplay: true
});

const controls = player.$plugins.chimeeControl;


describe('controls inited', async () => {
  expect(controls).toBeDefined();
});

describe('screen inited', async () => {
  const screen = await controls.children.screen;
  expect(screen).toBeDefined();
});
