import svgPaths from "./svg-tr0rz1pp8d";

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="🍎Header 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['SF_Pro_Text:Semibold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] tracking-[-0.084px]">Валюта вклада</p>
        </div>
      </div>
    </div>
  );
}

function FooterService() {
  return <div className="h-[8px] shrink-0 w-full" data-name="🍎Footer Service" />;
}

function Ic24X24StatusCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Status / Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Status / Check">
          <g id="Path"></g>
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-[287px]">{`Российский рубль `}</p>
      <Ic24X24StatusCheck />
    </div>
  );
}

function ControlListCheck() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="🍎Control List / Check">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Ic24X24StatusCheck1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Status / Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Status / Check">
          <g id="Path"></g>
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-[287px]">Китайский юань</p>
      <Ic24X24StatusCheck1 />
    </div>
  );
}

function ControlListCheck1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="🍎Control List / Check">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Lists() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center px-0 py-[24px] relative rounded-[12px] shadow-[0px_8px_16px_0px_rgba(58,58,68,0.16),0px_16px_32px_0px_rgba(90,91,106,0.08)] shrink-0 w-full" data-name="Lists">
      <Header />
      <FooterService />
      <ControlListCheck />
      <ControlListCheck1 />
      <FooterService />
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="absolute right-0 size-[32px] top-0" data-name="🍎 Button Close">
      <div className="absolute inset-[-25%_-37.5%_-50%_-37.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g filter="url(#filter0_dd_2_4669)" id="ð Button Close">
            <circle cx="28" cy="24" fill="var(--fill-0, white)" id="BG" r="16" />
            <g id="ic / 16x16 / ui / SmallClose2">
              <path d={svgPaths.pad8e1b0} fill="var(--fill-0, black)" id="Union" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_dd_2_4669" width="56" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_4669" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.227451 0 0 0 0 0.227451 0 0 0 0 0.266667 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_2_4669" mode="normal" result="effect2_dropShadow_2_4669" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_2_4669" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function PopupSelector() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center pb-0 pt-[44px] px-0 relative size-full" data-name="🍎Popup Selector">
      <Lists />
      <ButtonClose />
    </div>
  );
}