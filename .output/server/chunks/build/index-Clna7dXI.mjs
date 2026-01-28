import { a as buildAssetsURL, p as publicAssetsURL } from '../routes/renderer.mjs';
import { withCtx, createVNode, ref, mergeProps, defineComponent, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, useSSRContext } from 'vue';
import { ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0$1 = publicAssetsURL("/images/separator_big.svg");
const _sfc_main$2 = {
  props: {
    alignRight: Boolean,
    sepSize: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full mb-10 lg:flex justify-center" }, _attrs))}><div class="w-full lg:max-w-[900px] lg:flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center"><img class="w-full h-64 -my-24 rotate-90 flex lg:hidden justify-center"${ssrRenderAttr("src", _imports_0$1)} alt="">`);
  if (!$props.alignRight) {
    _push(`<div data-aos="fade-left" data-aos-delay="100" class="flex lg:justify-end mx-10 lg:ml-0 lg:-mr-16"><div class="lg:text-right">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<div class="hidden lg:block"></div>`);
  }
  _push(`<div data-aos="fade-up" data-aos-delay="100" class="hidden lg:flex justify-center"><img class="${ssrRenderClass([$props.alignRight ? "" : "scale-x-[-1]"])}"${ssrRenderAttr("src", `/images/separator_${$props.sepSize}.svg`)} alt=""></div>`);
  if ($props.alignRight) {
    _push(`<div data-aos="fade-right" data-aos-delay="100" class="flex justify-start mx-10 lg:mr-0 lg:-ml-16"><div class="text-left">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/history/Line.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_1$1 = "data:image/svg+xml,%3csvg%20width='35'%20height='64'%20viewBox='0%200%2035%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M34.3203%2031.8193L2.5%2063.6396L0%2061.1387L29.3203%2031.8193L0%202.49902L2.5%200L34.3203%2031.8193Z'%20fill='%23EB4A4A'/%3e%3cpath%20d='M22.6807%2031.8203L8.77344%2045.6396L7.68066%2044.5537L20.4951%2031.8203L7.68066%2019.0859L8.77344%2018L22.6807%2031.8203Z'%20fill='%23EB4A4A'/%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "Carousel",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      "/images/carousel_main.png",
      "/images/carousel_ik.png",
      "/images/carousel_big_models.png",
      "/images/carousel_gk.png"
    ]);
    ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-6 xl:mr-0 xl:ml-28 relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<button class="prev-btn absolute -left-10 md:-left-16 top-1/2 -translate-y-1/2 z-20"><img${ssrRenderAttr("src", _imports_1$1)} class="smooth w-5 md:w-auto scale-x-[-1] opacity-60 hover:opacity-100"></button><button class="next-btn absolute -right-10 md:-right-16 top-1/2 -translate-y-1/2 z-20"><img${ssrRenderAttr("src", _imports_1$1)} class="smooth w-5 md:w-auto opacity-60 hover:opacity-100"></button><div class="custom-pagination z-2 flex justify-center mt-4"></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "data:image/svg+xml,%3csvg%20width='27'%20height='31'%20viewBox='0%200%2027%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.03816%2029.0113L0.815628%201.15381L24.9694%2017.4535L13.6094%2018.5489L8.03816%2029.0113Z'%20fill='%23252020'%20stroke='%23CDCDCD'/%3e%3c/svg%3e";
const _imports_1 = "" + buildAssetsURL("profile_drawing.BK2rRWgp.svg");
const _imports_2 = "data:image/svg+xml,%3csvg%20width='297'%20height='96'%20viewBox='0%200%20297%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M296.5%200V9.5L296.5%2096H0L89.5%200H296.5Z'%20fill='%23272727'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='161'%20height='189'%20viewBox='0%200%20161%20189'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M120.06%2023.2998L159.715%2047.25L160.08%2094.5L159.715%20141.75L120.06%20165.7L80.04%20189L40.0205%20165.7L0.365234%20141.75L0%2094.5L0.365234%2047.25L40.0205%2023.2998L80.04%200L120.06%2023.2998ZM43.5%2029.4502L7.29395%2051.5L6.95996%2095L7.29395%20138.5L43.5%20160.55L80.04%20182L116.58%20160.55L152.786%20138.5L153.12%2095L152.786%2051.5L116.58%2029.4502L80.04%208L43.5%2029.4502Z'%20fill='%2380E1D6'/%3e%3cpath%20d='M63.5%20140.96C72.608%20140.96%2080%20134.094%2080%20125.633V110.307H63.5C54.392%20110.307%2047%20117.173%2047%20125.633C47%20134.094%2054.392%20140.96%2063.5%20140.96Z'%20fill='%230ACF83'/%3e%3cpath%20d='M47%2094.98C47%2086.5197%2054.392%2079.6533%2063.5%2079.6533H80V110.307H63.5C54.392%20110.307%2047%20103.44%2047%2094.98Z'%20fill='%23A259FF'/%3e%3cpath%20d='M47%2064.3267C47%2055.8663%2054.392%2049%2063.5%2049H80V79.6533H63.5C54.392%2079.6533%2047%2072.787%2047%2064.3267Z'%20fill='%23F24E1E'/%3e%3cpath%20d='M80%2049H96.5C105.608%2049%20113%2055.8663%20113%2064.3267C113%2072.787%20105.608%2079.6533%2096.5%2079.6533H80V49Z'%20fill='%23FF7262'/%3e%3cpath%20d='M113%2094.98C113%20103.44%20105.608%20110.307%2096.5%20110.307C87.392%20110.307%2080%20103.44%2080%2094.98C80%2086.5197%2087.392%2079.6533%2096.5%2079.6533C105.608%2079.6533%20113%2086.5197%20113%2094.98Z'%20fill='%231ABCFE'/%3e%3c/svg%3e";
const _imports_4 = "" + buildAssetsURL("node.Bwme0Db2.svg");
const _imports_5 = "data:image/svg+xml,%3csvg%20width='161'%20height='189'%20viewBox='0%200%20161%20189'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M120.06%2023.2998L159.715%2047.25L160.08%2094.5L159.715%20141.75L120.06%20165.7L80.04%20189L40.0205%20165.7L0.365234%20141.75L0%2094.5L0.365234%2047.25L40.0205%2023.2998L80.04%200L120.06%2023.2998ZM43.5%2029.4502L7.29395%2051.5L6.95996%2095L7.29395%20138.5L43.5%20160.55L80.04%20182L116.58%20160.55L152.786%20138.5L153.12%2095L152.786%2051.5L116.58%2029.4502L80.04%208L43.5%2029.4502Z'%20fill='%2380E1D6'/%3e%3cpath%20d='M63.1122%20107.03C59.8864%20112.366%2058.057%20115.393%2063.1803%20118.72H38.6448C28.4227%20118.72%2032.5107%20110.852%2034.5551%20106.918L34.5555%20106.917C36.5998%20102.982%2058.839%2064.6122%2063.1803%2059.7042C67.5217%2054.7962%2071.6151%2054.7344%2075.4481%2059.7042C79.281%2064.674%2083.6266%2073.4745%2083.6266%2073.4745L63.1803%20106.917L63.1122%20107.03Z'%20fill='%2380EEC0'/%3e%3cpath%20d='M70.8852%20106.915C65.4905%20114.11%2065.9389%20117.929%2072.9299%20118.718H122.001C131.064%20117.879%20129.824%20112.53%20126.09%20106.915L103.599%2071.5055C99.6107%2065.87%2097.3119%2065.9991%2093.3761%2071.5055C93.3761%2071.5055%2076.28%2099.7197%2070.8852%20106.915Z'%20fill='%2300DC82'/%3e%3c/svg%3e";
const _imports_6 = "data:image/svg+xml,%3csvg%20width='161'%20height='189'%20viewBox='0%200%20161%20189'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M120.06%2023.2998L159.715%2047.25L160.08%2094.5L159.715%20141.75L120.06%20165.7L80.04%20189L40.0205%20165.7L0.365234%20141.75L0%2094.5L0.365234%2047.25L40.0205%2023.2998L80.04%200L120.06%2023.2998ZM43.5%2029.4502L7.29395%2051.5L6.95996%2095L7.29395%20138.5L43.5%20160.55L80.04%20182L116.58%20160.55L152.786%20138.5L153.12%2095L152.786%2051.5L116.58%2029.4502L80.04%208L43.5%2029.4502Z'%20fill='%2380E1D6'/%3e%3cpath%20d='M49.157%20118.712C29.553%20118.712%2031.0233%2073.916%2049.157%2073.916H82.4842V68.707H61.41V56.2061C61.41%2045.2675%2099.1473%2042.6631%2099.1473%2056.2061V80.6875C99.1472%2088.1881%2093.7563%2091.1054%2088.8553%2091.1055H73.6619C59.9392%2091.1055%2056.0185%2098.9183%2056.5086%20109.336V118.712H49.157ZM69.741%2064.0195C71.9064%2064.0195%2073.6619%2062.1539%2073.6619%2059.8525C73.6619%2057.5511%2071.9064%2055.6855%2069.741%2055.6855C67.5757%2055.6856%2065.8201%2057.5512%2065.8201%2059.8525C65.8202%2062.1538%2067.5757%2064.0194%2069.741%2064.0195Z'%20fill='%230277BC'/%3e%3cpath%20d='M111.456%2070.4395C131.06%2070.4395%20129.589%20115.235%20111.456%20115.235H78.1284V120.444H99.2036V132.945C99.2033%20143.884%2061.4657%20146.488%2061.4654%20132.945V108.464C61.4654%20100.963%2066.8564%2098.046%2071.7574%2098.0459H86.9507C100.673%2098.0459%20104.594%2090.233%20104.104%2079.8154V70.4395H111.456ZM88.9107%20125.653C86.7455%20125.654%2084.9908%20127.519%2084.9908%20129.82C84.9909%20132.121%2086.7456%20133.987%2088.9107%20133.987C91.076%20133.987%2092.8314%20132.122%2092.8316%20129.82C92.8316%20127.519%2091.0761%20125.653%2088.9107%20125.653Z'%20fill='%23FEC008'/%3e%3c/svg%3e";
const _imports_7 = "data:image/svg+xml,%3csvg%20width='161'%20height='189'%20viewBox='0%200%20161%20189'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M120.06%2023.2998L159.715%2047.25L160.08%2094.5L159.715%20141.75L120.06%20165.7L80.04%20189L40.0205%20165.7L0.365234%20141.75L0%2094.5L0.365234%2047.25L40.0205%2023.2998L80.04%200L120.06%2023.2998ZM43.5%2029.4502L7.29395%2051.5L6.95996%2095L7.29395%20138.5L43.5%20160.55L80.04%20182L116.58%20160.55L152.786%20138.5L153.12%2095L152.786%2051.5L116.58%2029.4502L80.04%208L43.5%2029.4502Z'%20fill='%2380E1D6'/%3e%3cpath%20d='M51.7344%20105.094C45.029%20105.094%2041.1176%20108.86%2040%20110.743C40%20106.506%2042.8824%2096.2656%2058%2095.1077C76.4398%2093.6953%2079.1594%20108.502%2091%20108.501C104.5%20108.501%20109.907%2096.4883%20108.73%20100.857C107.507%20105.399%20108.426%20119.808%2081.9086%20119.216C70.1779%20118.954%2060.1161%20105.094%2051.7344%20105.094Z'%20fill='url(%23paint0_linear_137_25)'/%3e%3cpath%20d='M63.7344%2081.0811C57.029%2081.0811%2053.1176%2084.847%2052%2086.73C52%2082.4934%2054.8824%2072.2529%2070%2071.095C88.4398%2069.6826%2091.1594%2084.489%20103%2084.4886C116.5%2084.488%20121.907%2072.4756%20120.73%2076.8444C119.507%2081.3858%20120.426%2095.7954%2093.9086%2095.2033C82.1779%2094.9414%2072.1161%2081.0811%2063.7344%2081.0811Z'%20fill='url(%23paint1_linear_137_25)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_137_25'%20x1='140.5'%20y1='95.1075'%20x2='38.5'%20y2='95.1075'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2316CA7E'/%3e%3cstop%20offset='1'%20stop-color='%2316BDCA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_137_25'%20x1='152.5'%20y1='71.0948'%20x2='50.5'%20y2='71.0948'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2316CA7E'/%3e%3cstop%20offset='1'%20stop-color='%2316BDCA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_8 = "data:image/svg+xml,%3csvg%20width='161'%20height='189'%20viewBox='0%200%20161%20189'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M120.06%2023.2998L159.715%2047.25L160.08%2094.5L159.715%20141.75L120.06%20165.7L80.04%20189L40.0205%20165.7L0.365234%20141.75L0%2094.5L0.365234%2047.25L40.0205%2023.2998L80.04%200L120.06%2023.2998ZM43.5%2029.4502L7.29395%2051.5L6.95996%2095L7.29395%20138.5L43.5%20160.55L80.04%20182L116.58%20160.55L152.786%20138.5L153.12%2095L152.786%2051.5L116.58%2029.4502L80.04%208L43.5%2029.4502Z'%20fill='%2380E1D6'/%3e%3cpath%20d='M78.748%20112.783L50.9724%2063H33L78.748%20147.48L126.13%2063H106.524L78.748%20112.783Z'%20fill='%2341B883'/%3e%3cpath%20d='M78.7481%20112.783L50.9725%2063H68.945L78.7481%2082.6114L88.5513%2063H106.524L78.7481%20112.783Z'%20fill='%2334495E'/%3e%3c/svg%3e";
const _imports_9 = "data:image/svg+xml,%3csvg%20width='76'%20height='73'%20viewBox='0%200%2076%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1.5'%20y='13.5'%20width='73'%20height='46.2529'%20stroke='%2380E1D6'%20stroke-width='3'/%3e%3cpath%20d='M1.15756%2013.5518L26.2612%2033.6548M74.8253%2013.5518L49.9956%2033.6548M74.8253%2059.956L49.9956%2033.6548M1.15756%2059.956L26.2612%2033.6548M26.2612%2033.6548L38.1284%2043.2575L49.9956%2033.6548'%20stroke='%2380E1D6'%20stroke-width='3'/%3e%3c/svg%3e";
const _imports_10 = "data:image/svg+xml,%3csvg%20width='35'%20height='72'%20viewBox='0%200%2035%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31%200C33.2091%200%2035%201.79086%2035%204V68C35%2070.2091%2033.2091%2072%2031%2072H4C1.79086%2072%201.61066e-08%2070.2091%200%2068V4C1.03083e-06%201.79086%201.79086%201.20798e-08%204%200H31ZM17.5%2065C16.1193%2065%2015%2066.1193%2015%2067.5C15%2068.8807%2016.1193%2070%2017.5%2070C18.8807%2070%2020%2068.8807%2020%2067.5C20%2066.1193%2018.8807%2065%2017.5%2065ZM2%208V62H33V8H2ZM15%204C14.4477%204%2014%204.44772%2014%205C14%205.55228%2014.4477%206%2015%206H20C20.5523%206%2021%205.55228%2021%205C21%204.44772%2020.5523%204%2020%204H15Z'%20fill='%2380E1D6'/%3e%3c/svg%3e";
const _imports_11 = "data:image/svg+xml,%3csvg%20width='69'%20height='73'%20viewBox='0%200%2069%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M62%200C65.866%200%2069%203.13401%2069%207V66C69%2069.866%2065.866%2073%2062%2073H7C3.13401%2073%200%2069.866%200%2066V7C0%203.13401%203.13401%200%207%200H62ZM11%2025C9.89543%2025%209%2025.8954%209%2027V60C9%2061.1046%209.89543%2062%2011%2062H18C19.1046%2062%2020%2061.1046%2020%2060V27C20%2025.8954%2019.1046%2025%2018%2025H11ZM61%2037.999C60.6068%2021.8771%2041.6591%2021.9914%2037.2168%2029.124C37.1057%2029.3025%2037.0363%2029.5011%2037%2029.707V27C37%2025.8954%2036.1046%2025%2035%2025H28C26.8954%2025%2026%2025.8954%2026%2027V60C26%2061.1046%2026.8954%2062%2028%2062H35C36.1046%2062%2037%2061.1046%2037%2060V41.5586C40.069%2034.9584%2049%2032.939%2049%2040.999V59.999C49%2061.1036%2049.8954%2061.999%2051%2061.999H59C60.1046%2061.999%2061%2061.1036%2061%2059.999V37.999ZM14.5%207C10.3579%207%207%2010.5817%207%2015C7%2019.4183%2010.3579%2023%2014.5%2023C18.6421%2023%2022%2019.4183%2022%2015C22%2010.5817%2018.6421%207%2014.5%207Z'%20fill='%2380E1D6'/%3e%3c/svg%3e";
const _sfc_main = {
  data() {
    return {
      current: "home",
      sections: ["home", "tech", "historique", "hobby", "contact"],
      slideOpen: false,
      sectionEls: []
    };
  },
  mounted() {
    this.sectionEls = this.sections.map((id) => (void 0).querySelector(`[data-section="${id}"]`)).filter(Boolean);
    this.updateCurrentSection();
    (void 0).addEventListener("scroll", this.updateCurrentSection, { passive: true });
    (void 0).addEventListener("resize", this.updateCurrentSection);
  },
  beforeUnmount() {
    (void 0).removeEventListener("scroll", this.updateCurrentSection);
    (void 0).removeEventListener("resize", this.updateCurrentSection);
  },
  methods: {
    navClass(id) {
      const base = "text-4xl font-kdam h-9 transition-colors duration-200";
      const inactive = "text-blue hover:text-red";
      const active = "text-red underline decoration-red underline-offset-8 decoration-2";
      return `${base} ${this.current === id ? active : inactive}`;
    },
    updateCurrentSection() {
      if (!this.sectionEls.length) return;
      const viewportHeight = (void 0).innerHeight;
      const headerOffset = 96;
      const targetY = viewportHeight * 0.3;
      let activeId = this.current;
      for (const el of this.sectionEls) {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        if (top - headerOffset <= targetY && bottom > targetY) {
          const id = el.getAttribute("data-section");
          if (id) activeId = id;
          break;
        }
      }
      const scrollY = (void 0).scrollY || (void 0).pageYOffset;
      const docHeight = (void 0).documentElement.scrollHeight;
      const scrolledToBottom = scrollY + viewportHeight >= docHeight - 5;
      if (scrolledToBottom) {
        activeId = "contact";
      }
      this.current = activeId;
    },
    async scrollTo(id) {
      const el = (void 0).getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      await setTimeout(() => {
        this.slideOpen = false;
      }, 700);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HistoryLine = __nuxt_component_0$1;
  const _component_Carousel = _sfc_main$1;
  _push(`<!--[--><div class="flex justify-between bg-gradient-to-t from-black/0 to-grey w-full fixed top-0 z-50"><p class="text-4xl px-8 py-6 lg:text-5xl xl:text-6xl font-valorant text-red-light">Am</p><p class="${ssrRenderClass([$data.slideOpen ? "hidden" : "", "md:hidden font-kdam text-end text-2xl uppercase px-8 py-6 text-blue underline decoration-red underline-offset-8 decoration-2"])}">${ssrInterpolate($data.current)}</p><nav class="${ssrRenderClass([$data.slideOpen ? "" : "hidden md:flex", "flex flex-col md:flex-row md:justify-around gap-4 xl:gap-8 my-auto px-8 py-6 duration-300 ease-in-out h-full bg-gradient-to-r from-black/0 to-grey h-screen md:bg-none md:h-auto"])}"><!--[-->`);
  ssrRenderList($data.sections, (section) => {
    _push(`<a${ssrRenderAttr("href", "#" + section)} class="${ssrRenderClass([$options.navClass(section), "text-xl text-end lg:text-3xl xl:text-4xl uppercase"])}">${ssrInterpolate(section)}</a>`);
  });
  _push(`<!--]--></nav></div><section id="home" data-section="home" class="h-screen w-full font-kdam"><div class="w-full h-full lg:flex"><div class="w-full px-[10%] lg:mx-auto justify-center lg:w-1/2 h-full inline-flex items-center"><div><p class="z-3 relative font-valorant text-center text-5xl sm:text-6xl 2xl:text-8xl font-mask">ALEXaNDrE MAYER</p><div class="z-1 inline-flex relative justify-center w-full mt-4 badge-group-entrance"><div class="relative inline-block py-2 mx-auto badge-wrap"><span aria-hidden="true" class="dot-h"></span><span aria-hidden="true" class="dot-v"></span><div class="inline-block border border-blue py-2"><p class="text-center text-red text- sm:text-2xl px-2">FULLSTACK DEV</p><hr class="border-blue w-11/12 mx-auto"></div></div><img${ssrRenderAttr("src", _imports_0)} alt="" class="absolute right-[calc(60%-7rem)] sm:right-[calc(50%-7rem)] bottom-[-1rem]"></div><div class="text-xl sm:text-3xl mt-24 text-center"><p class="text-white"><span class="text-blue">.//</span> Cr\xE9ateur D&#39;exp\xE9riences digitales</p><button data-aos="fade" data-aos-delay="200" class="relative inline-block h-[5rem] w-[16rem] sm:h-[6rem] sm:w-[16rem] text-black text-xl sm:text-2xl glow-btn"> En savoir plus </button></div></div></div><div class="hidden w-1/2 lg:flex items-end"><img class="w-full 2xl:w-[80%]"${ssrRenderAttr("src", _imports_1)} alt=""></div></div></section><section id="tech" data-section="tech" class="relative bg-grey-dark py-20"><img class="absolute right-0 -top-14"${ssrRenderAttr("src", _imports_2)} alt=""><div class="text-2xl sm:text-3xl font-kdam text-center"><p class="text-white"><span class="text-blue">.//</span> MES TECHNOLOGIES</p></div><div class="lg:flex justify-center text-white items-center font-kdam py-20 gap-20"><div class="flex justify-center lg:justify-end lg:w-1/2"><div class="flex justify-end rtl gap-10"><img data-aos="fade-right" class="w-[4rem] md:w-[6rem] xl:w-auto"${ssrRenderAttr("src", _imports_3)} alt=""></div></div><div class="mt-10 mx-4 text-center lg:text-start lg:w-1/2"><h3 class="text-2xl mb-4"><span class="text-blue">.</span>DESIGN</h3><p class="mx-6 md:mx-0 text-lg text-grey-light lg:w-1/2"> Apr\xE8s avoir \xE9tabli un cahier des charges complets pour un projet, je cr\xE9\xE9 une maquette sur figma, permettant de voir tout de suite ce \xE0 quoi va ressembler le projet une fois d\xE9velopp\xE9 et \xE9tablir une direction artistique claire. </p></div></div><div class="lg:flex justify-center text-white items-center font-kdam py-20 gap-20"><div class="flex justify-center lg:justify-end lg:w-1/2"><div class="flex justify-end rtl gap-10"><img data-aos="fade-right" data-aos-delay="100" class="w-[4rem] md:w-[6rem] xl:w-auto"${ssrRenderAttr("src", _imports_4)} alt=""><img data-aos="fade-right" data-aos-delay="300" class="w-[4rem] md:w-[6rem] xl:w-auto"${ssrRenderAttr("src", _imports_5)} alt=""><img data-aos="fade-right" data-aos-delay="500" class="w-[4rem] md:w-[6rem] xl:w-auto"${ssrRenderAttr("src", _imports_6)} alt=""></div></div><div class="mt-10 mx-4 text-center lg:text-start lg:w-1/2"><h3 class="text-2xl mb-4"><span class="text-blue">.</span>BACK_END</h3><p class="text-lg text-grey-light lg:w-1/2"> Toute bonne application a besoin d\u2019un bon backend qui r\xE9pond directement aux besoins frontend. C\u2019est pourquoi je travaille principalement avec Nuxt.js. Il permet d\u2019unir le front et le back dans un m\xEAme projet, tout en permettant une architecture API REST propre et efficace. Je ma\xEEtrise aussi Python avec Django lorsqu\u2019il est n\xE9cessaire. </p></div></div><div class="lg:flex justify-center text-white items-center font-kdam py-20 gap-20"><div class="flex justify-center lg:justify-end lg:w-1/2"><div class="flex justify-end rtl gap-10"><img data-aos="fade-right" data-aos-delay="100" class="w-[4rem] md:w-[6rem] xl:w-auto"${ssrRenderAttr("src", _imports_7)} alt=""><img data-aos="fade-right" data-aos-delay="300" class="w-[4rem] md:w-[6rem] xl:w-auto"${ssrRenderAttr("src", _imports_8)} alt=""></div></div><div class="mt-10 mx-4 text-center lg:text-start lg:w-1/2"><h3 class="text-2xl mb-4"><span class="text-blue">.</span>FRONT_END</h3><p class="text-lg text-grey-light lg:w-1/2"> Le front end est crucial pour attirer l\u2019oeil de l\u2019utilisateur et lui offrir une UX belle et intuitive. C\u2019est pourquoi je travail avec Vue.js qui permet une architecture SFC (single file component) donnant acc\xE8s \xE0 des composants r\xE9utilisables, coupl\xE9s avec Pinia Store pour avoir acc\xE8s au core syst\xE8me de l\u2019app depuis n\u2019importe quel composants. De pair avec tailwind, cette stack me permet de d\xE9velopper rapidement une interface pratique. </p></div></div></section><section id="historique" data-section="historique" class="min-h-screen py-20"><div class="text-2xl sm:text-3xl font-kdam text-center"><p class="text-white"><span class="text-blue">.//</span> MON HISTORIQUE</p></div><div class="mt-10 text-white font-kdam tracking-wide">`);
  _push(ssrRenderComponent(_component_HistoryLine, {
    alignRight: true,
    sepSize: "big"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-2xl mb-4"${_scopeId}>GROUPE WE</h3><p class="text-grey-light mb-4"${_scopeId}>Mars 2023 - Aujourd\u2019hui , Marcoussis 91460 </p><p${_scopeId}> D\xE9veloppement de divers applications et sites web dont : </p><ul class="list-disc ml-6 mb-4"${_scopeId}><li${_scopeId}>Un outil interne pour la recherche et suivi de march\xE9s publiques</li><li${_scopeId}>plusieurs sites vitrines pour pr\xE9senter chaque filiales du groupe et \xE9tablir une image publique</li><li${_scopeId}>Webapp de commande et demande de devis en ligne pour des produits B2B</li></ul><p${_scopeId}> Mise en place d\u2019un CRM et d\xE9veloppement de features essentielles au fonctionnement de l\u2019entreprise </p>`);
      } else {
        return [
          createVNode("h3", { class: "text-2xl mb-4" }, "GROUPE WE"),
          createVNode("p", { class: "text-grey-light mb-4" }, "Mars 2023 - Aujourd\u2019hui , Marcoussis 91460 "),
          createVNode("p", null, " D\xE9veloppement de divers applications et sites web dont : "),
          createVNode("ul", { class: "list-disc ml-6 mb-4" }, [
            createVNode("li", null, "Un outil interne pour la recherche et suivi de march\xE9s publiques"),
            createVNode("li", null, "plusieurs sites vitrines pour pr\xE9senter chaque filiales du groupe et \xE9tablir une image publique"),
            createVNode("li", null, "Webapp de commande et demande de devis en ligne pour des produits B2B")
          ]),
          createVNode("p", null, " Mise en place d\u2019un CRM et d\xE9veloppement de features essentielles au fonctionnement de l\u2019entreprise ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HistoryLine, { sepSize: "medium" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-2xl mb-4"${_scopeId}>Pin-Pon DEV</h3><p class="text-grey-light mb-4"${_scopeId}>Mars 2022 - F\xE9vrier 2023 , Saint-Michel-sur-Orge 91240 </p><ul class="my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4"${_scopeId}><li class="my-4"${_scopeId}>D\xE9veloppement et bug fixing sur la plateforme supercard.fr</li><li${_scopeId}>Cr\xE9ation d\u2019une webapp Nuxt \xE0 destination des charg\xE9s d\u2019insertion du d\xE9partement de l\u2019Is\xE8re</li><li class="my-4"${_scopeId}>Migration d\u2019une plateforme r\xE9seau d\u2019unniversit\xE9 sous kubernetes</li></ul>`);
      } else {
        return [
          createVNode("h3", { class: "text-2xl mb-4" }, "Pin-Pon DEV"),
          createVNode("p", { class: "text-grey-light mb-4" }, "Mars 2022 - F\xE9vrier 2023 , Saint-Michel-sur-Orge 91240 "),
          createVNode("ul", { class: "my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4" }, [
            createVNode("li", { class: "my-4" }, "D\xE9veloppement et bug fixing sur la plateforme supercard.fr"),
            createVNode("li", null, "Cr\xE9ation d\u2019une webapp Nuxt \xE0 destination des charg\xE9s d\u2019insertion du d\xE9partement de l\u2019Is\xE8re"),
            createVNode("li", { class: "my-4" }, "Migration d\u2019une plateforme r\xE9seau d\u2019unniversit\xE9 sous kubernetes")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HistoryLine, {
    alignRight: true,
    sepSize: "light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-2xl mb-4"${_scopeId}>Aybo Conseil </h3><p class="text-grey-light mb-4"${_scopeId}>D\xE9cembre 2021 - Janvier 2021, Paris, 75008 </p><p${_scopeId}> Finalisation du d\xE9veloppement d\u2019outils internes, plateformes intranet. </p>`);
      } else {
        return [
          createVNode("h3", { class: "text-2xl mb-4" }, "Aybo Conseil "),
          createVNode("p", { class: "text-grey-light mb-4" }, "D\xE9cembre 2021 - Janvier 2021, Paris, 75008 "),
          createVNode("p", null, " Finalisation du d\xE9veloppement d\u2019outils internes, plateformes intranet. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HistoryLine, { sepSize: "medium" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-2xl mb-4"${_scopeId}>Made in Paris</h3><p class="text-grey-light mb-4"${_scopeId}>D\xE9cembre 2021 - Janvier 2021, Paris, 75008</p><p${_scopeId}> D\xE9veloppement de divers projets dans le domaine de la food Tech : </p><ul class="my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4"${_scopeId}><li class="my-4"${_scopeId}>Cr\xE9ation d\u2019API Django REST framework</li><li${_scopeId}>D\xE9veloppement de webapps avec VueJS et Tailwind</li></ul>`);
      } else {
        return [
          createVNode("h3", { class: "text-2xl mb-4" }, "Made in Paris"),
          createVNode("p", { class: "text-grey-light mb-4" }, "D\xE9cembre 2021 - Janvier 2021, Paris, 75008"),
          createVNode("p", null, " D\xE9veloppement de divers projets dans le domaine de la food Tech : "),
          createVNode("ul", { class: "my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4" }, [
            createVNode("li", { class: "my-4" }, "Cr\xE9ation d\u2019API Django REST framework"),
            createVNode("li", null, "D\xE9veloppement de webapps avec VueJS et Tailwind")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HistoryLine, {
    alignRight: true,
    sepSize: "light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-2xl mb-4"${_scopeId}>Freelance </h3><p class="text-grey-light mb-4"${_scopeId}>Nov 2020 \xE0 Mars 2021, Saint-Michel-sur-Orge 91240</p><ul class="list-disc ml-6 mb-4"${_scopeId}><li class="my-4"${_scopeId}>Cr\xE9ation de sites web pour petites entreprises.</li><li${_scopeId}>Conception et cr\xE9ation d\u2019une plateforme de mise en relation pour collectionneurs Pop culture.</li></ul>`);
      } else {
        return [
          createVNode("h3", { class: "text-2xl mb-4" }, "Freelance "),
          createVNode("p", { class: "text-grey-light mb-4" }, "Nov 2020 \xE0 Mars 2021, Saint-Michel-sur-Orge 91240"),
          createVNode("ul", { class: "list-disc ml-6 mb-4" }, [
            createVNode("li", { class: "my-4" }, "Cr\xE9ation de sites web pour petites entreprises."),
            createVNode("li", null, "Conception et cr\xE9ation d\u2019une plateforme de mise en relation pour collectionneurs Pop culture.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HistoryLine, { sepSize: "light" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-2xl mb-4"${_scopeId}>Cabinet BME&amp;C</h3><p class="text-grey-light mb-4"${_scopeId}>Juin 2018 - Dec 2019, Ach\xE8res 78260 </p><ul class="my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4"${_scopeId}><li class="my-4"${_scopeId}>Installation et administration de deux serveurs d&#39;applications RDP</li><li${_scopeId}>Administration de l&#39;infrastructure logistique mat\xE9riel et r\xE9seau.</li></ul>`);
      } else {
        return [
          createVNode("h3", { class: "text-2xl mb-4" }, "Cabinet BME&C"),
          createVNode("p", { class: "text-grey-light mb-4" }, "Juin 2018 - Dec 2019, Ach\xE8res 78260 "),
          createVNode("ul", { class: "my-2 list-disc lg:mr-6 lg:rtl ltr mr-0 mb-4" }, [
            createVNode("li", { class: "my-4" }, "Installation et administration de deux serveurs d'applications RDP"),
            createVNode("li", null, "Administration de l'infrastructure logistique mat\xE9riel et r\xE9seau.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section><section id="hobby" data-section="hobby" class="relative bg-grey-dark font-kdam py-20"><img class="absolute left-0 scale-x-[-1] -top-14"${ssrRenderAttr("src", _imports_2)} alt=""><div class="text-2xl sm:text-3xl font-kdam text-center"><p class="text-white"><span class="text-blue">.//</span> UN D\xC9VELOPPEUR PASSIONN\xC9</p></div><p class="text-white mx-10 xl:mx-auto tracking-wide xl:w-1/3 mt-20"> J\u2019ai toujours \xE9t\xE9 anim\xE9 par les domaines cr\xE9atifs. Programmation, cin\xE9ma, jeux vid\xE9o ou, plus r\xE9cemment, la peinture : <br><br> chaque discipline nourrit ma passion de donner vie \xE0 des id\xE9es. Ce qui m\u2019inspire avant tout, c\u2019est ce processus de cr\xE9ation - partir d\u2019une simple id\xE9e ou un besoin, et la transformer en quelque chose de concret et unique. <br><br> Cr\xE9er est pour moi plus qu\u2019une activit\xE9, c\u2019est mon terrain de confort. </p><div class="flex justify-center gap-4 md:gap-10 mt-20"><!--[-->`);
  ssrRenderList(["controller", "code", "warhammer", "twitch", "youtube"], (icon, index2) => {
    _push(`<img data-aos="fade-left"${ssrRenderAttr("data-aos-delay", 200 * index2)} class="w-10 xl:w-20"${ssrRenderAttr("src", `/icons/${icon}.svg`)} alt="">`);
  });
  _push(`<!--]--></div><div class="xl:flex mt-20"><div class="mx-auto w-4/5 xl:w-1/2">`);
  _push(ssrRenderComponent(_component_Carousel, null, null, _parent));
  _push(`</div><div class="mx-auto mt-20 xl:mt-0 xl:w-1/2 relative"><p class="mx-10 xl:mx-40 tracking-wide text-lg text-grey-light flex xl:top-1/3 xl:absolute text-center"> La peinture de figurines m&#39;offre une vraie parenth\xE8se dans mon quotidien de d\xE9veloppeur. J&#39;aime travailler la lumi\xE8re, les couleurs et les d\xE9tails pour donner vie \xE0 une pi\xE8ce. C&#39;est un \xE9quilibre simple entre technique et cr\xE9ativit\xE9, et un moyen efficace de me recentrer. </p></div></div></section><section id="contact" data-section="contact" class="my-20"><div class="text-2xl sm:text-3xl font-kdam text-center mb-20 lg:mb-40"><p class="text-white"><span class="text-blue">.//</span> POUR ME CONTACTER</p></div><div class="w-full lg:flex justify-center gap-20 text-white font-kdam pb-20"><div class="lg:flex gap-8 text-center items-center mb-10 lg:mb-0"><img data-aos="fade" data-aos-delay="100" class="mx-auto"${ssrRenderAttr("src", _imports_9)} alt=""><p>a.mayer.devpro@gmail.com</p></div><div class="lg:flex gap-8 text-center items-center mb-10 lg:mb-0"><img data-aos="fade" data-aos-delay="200" class="mx-auto"${ssrRenderAttr("src", _imports_10)} alt=""><p>06 21 59 63 82</p></div><div class="lg:flex gap-8 text-center items-center mb-10 lg:mb-0"><img data-aos="fade" data-aos-delay="300" class="mx-auto"${ssrRenderAttr("src", _imports_11)} alt=""><p>www.linkedin.com/in/alexandre-mayer</p></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Clna7dXI.mjs.map
