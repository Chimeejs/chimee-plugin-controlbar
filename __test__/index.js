import Chimee from 'chimee';
import ChimeeControl from '../src/index';
Chimee.install(ChimeeControl);

describe('template', () => {
  document.body.innerHTML = `
    <div id="wrapper"></div>
  `;
  const player = new Chimee({
    wrapper: '#wrapper',
    plugin: [ChimeeControl.name]
  });
  const control = player.__dispatcher.plugins.chimeeControl;
  it('contains spec with an expectation', () => {
    control.show = true;
    control.init(control.$videoConfig);
    // 监听 controls 属性
    expect(control.show).toBe(true);
    player.controls = false;
    console.log(control.$videoConfig.controls);
    expect(control.show).toBe(false);

    // dom 注入
    expect(control.$wrap).not.toBe(null);

    // children 注入
  });
});
