import svgPaths from "./svg-nndt8awzdw";

function HeaderService() {
  return <div className="absolute bg-white h-[12px] left-0 top-[88px] w-[375px]" data-name="🍎Header Service" />;
}

function SumSuffix() {
  return (
    <div className="content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[17px] text-nowrap tracking-[-0.408px] w-[295px]" data-name="Sum + Suffix">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.87)]">
        <p className="leading-[24px] text-nowrap whitespace-pre">300 000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.54)]">
        <p className="leading-[24px] text-[17px] text-nowrap whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function LabelSummSuffixBox() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Label + Summ + Suffix box">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.54)] w-[min-content]">
        <p className="leading-[16px]">Сумма вклада</p>
      </div>
      <SumSuffix />
    </div>
  );
}

function LabelSummSuffixIconBox() {
  return (
    <div className="bg-neutral-100 relative rounded-[12px] shrink-0 w-full" data-name="Label + Summ + Suffix + Icon box">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative w-full">
          <LabelSummSuffixBox />
        </div>
      </div>
    </div>
  );
}

function Hint() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hint">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.54)]">
            <p className="leading-[16px]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputHint() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input+Hint">
      <LabelSummSuffixIconBox />
      <Hint />
    </div>
  );
}

function InputAmount() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="🍎Input Amount">
      <InputHint />
    </div>
  );
}

function LabelTitle() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[4px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Label & Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(0,0,0,0.54)] w-full">
        <p className="leading-[16px]">Валюта</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-full">
        <p className="leading-[24px]">₽</p>
      </div>
    </div>
  );
}

function Ic24X24ServiceServiceArrowNext() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceArrowNext">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceArrowNext">
          <path clipRule="evenodd" d={svgPaths.p31f45f00} fill="var(--fill-0, black)" fillOpacity="0.42" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function InputBody() {
  return (
    <div className="bg-neutral-100 relative rounded-[12px] shrink-0 w-full" data-name="Input-body">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative w-full">
          <LabelTitle />
          <Ic24X24ServiceServiceArrowNext />
        </div>
      </div>
    </div>
  );
}

function Hint1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hint">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.54)]">
            <p className="leading-[16px]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputHint1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input+Hint">
      <InputBody />
      <Hint1 />
    </div>
  );
}

function InputSelect() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="🍎Input Select">
      <InputHint1 />
    </div>
  );
}

function CardHorizontalContainer() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-start left-0 px-[24px] py-0 top-[100px] w-[375px]" data-name="🍎Card / Horizontal Container">
      <InputAmount />
      <InputSelect />
    </div>
  );
}

function ServiceComponentCheckbox() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="🍎Service component / Checkbox">
      <div className="absolute bg-[rgba(0,0,0,0.12)] left-[3px] rounded-[4px] size-[18px] top-[3px]" data-name="Box" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-full">
        <p className="leading-[22px]">Капитализация</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <ServiceComponentCheckbox />
      <Frame5 />
    </div>
  );
}

function ControlListCheckbox() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-0 overflow-clip px-[24px] py-[12px] top-[444px] w-[375px]" data-name="🍎Control List / Checkbox">
      <Content />
    </div>
  );
}

function ServiceComponentCheckbox1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="🍎Service component / Checkbox">
      <div className="absolute bg-[rgba(0,0,0,0.12)] left-[3px] rounded-[4px] size-[18px] top-[3px]" data-name="Box" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-full">
        <p className="leading-[22px]">Выплата % ежемесячно</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <ServiceComponentCheckbox1 />
      <Frame6 />
    </div>
  );
}

function ControlListCheckbox1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-0 overflow-clip px-[24px] py-[12px] top-[396px] w-[375px]" data-name="🍎Control List / Checkbox">
      <Content1 />
    </div>
  );
}

function ServiceComponentCheckbox2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="🍎Service component / Checkbox">
      <div className="absolute bg-[rgba(0,0,0,0.12)] left-[3px] rounded-[4px] size-[18px] top-[3px]" data-name="Box" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-full">
        <p className="leading-[22px]">С частичным снятием</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <ServiceComponentCheckbox2 />
      <Frame7 />
    </div>
  );
}

function ControlListCheckbox2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-0 overflow-clip px-[24px] py-[12px] top-[348px] w-[375px]" data-name="🍎Control List / Checkbox">
      <Content2 />
    </div>
  );
}

function ServiceComponentCheckbox3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="🍎Service component / Checkbox">
      <div className="absolute bg-[rgba(0,0,0,0.12)] left-[3px] rounded-[4px] size-[18px] top-[3px]" data-name="Box" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-full">
        <p className="leading-[22px]">С пополнением</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <ServiceComponentCheckbox3 />
      <Frame8 />
    </div>
  );
}

function ControlListCheckbox3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-0 overflow-clip px-[24px] py-[12px] top-[300px] w-[375px]" data-name="🍎Control List / Checkbox">
      <Content3 />
    </div>
  );
}

function LabelTitle1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] gap-[4px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Label & Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(0,0,0,0.54)] w-full">
        <p className="leading-[16px]">Срок вклада</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-full">
        <p className="leading-[24px]">Любой срок</p>
      </div>
    </div>
  );
}

function Ic24X24ServiceServiceArrowNext1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceArrowNext">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceArrowNext">
          <path clipRule="evenodd" d={svgPaths.p31f45f00} fill="var(--fill-0, black)" fillOpacity="0.42" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function InputBody1() {
  return (
    <div className="bg-neutral-100 relative rounded-[12px] shrink-0 w-full" data-name="Input-body">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative w-full">
          <LabelTitle1 />
          <Ic24X24ServiceServiceArrowNext1 />
        </div>
      </div>
    </div>
  );
}

function Hint2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hint">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.54)]">
            <p className="leading-[16px]">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputHint2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input+Hint">
      <InputBody1 />
      <Hint2 />
    </div>
  );
}

function InputSelect1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[100px] items-start left-0 px-[24px] py-[8px] top-[200px] w-[375px]" data-name="🍎Input Select">
      <InputHint2 />
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#f26126] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] shrink-0 w-full" data-name="🍎Button 🧡Primary">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[15px] relative w-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Подобрать</p>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimary1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-center left-0 px-[24px] py-[20px] top-[492px] w-[375px]" data-name="🍎Button 🧡Primary">
      <ButtonPrimary />
    </div>
  );
}

function Ic24X24UiInfo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / Info">
          <g id="Union">
            <path d={svgPaths.p3aec8800} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p9211e00} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p3f57cf70} fill="var(--fill-0, black)" fillOpacity="0.42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleIcon() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Title & Icon">
      <p className="basis-0 font-['SF_Pro_Display:Semibold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">«Мой доход» 17% годовых</p>
      <Ic24X24UiInfo />
    </div>
  );
}

function Header() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-[32px] px-0 relative shrink-0 w-full" data-name="🍎 Header 2">
      <TitleIcon />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.08px]">
        <p className="leading-[18px] whitespace-pre">
          <span>{`Вы получите `}</span>239 234,35₽
        </p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[18px]">Срок вклада 3 месяца</p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[295px]" data-name="Container">
      <CardHorizontalContainer1 />
      <CardHorizontalContainer2 />
    </div>
  );
}

function Ic24X24ServiceServiceValidation() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceValidation2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceValidation2">
          <path d={svgPaths.p16e9f380} fill="var(--fill-0, #359F58)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24ServiceServiceValidation />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Частичное снятие</p>
      </div>
    </div>
  );
}

function Ic24X24UiCloseFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / CloseFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / CloseFilled">
          <path d={svgPaths.p795f5c0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24UiCloseFilled />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Пополнение</p>
      </div>
    </div>
  );
}

function FooterService() {
  return <div className="h-[16px] shrink-0 w-full" data-name="🍎Footer Service" />;
}

function ButtonPrimary2() {
  return (
    <div className="bg-[#f26126] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] shrink-0 w-full" data-name="🍎Button 🧡Primary">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[15px] relative w-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Открыть вклад</p>
        </div>
      </div>
    </div>
  );
}

function DepositCards() {
  return (
    <div className="bg-violet-50 relative rounded-[12px] shrink-0 w-full" data-name="Deposit cards">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-0 px-[24px] relative w-full">
          <Header />
          <Container />
          <ListBase />
          <ListBase1 />
          <FooterService />
          <ButtonPrimary2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[24px] py-0 top-[712px] w-[375px]">
      <DepositCards />
    </div>
  );
}

function Ic24X24UiInfo1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / Info">
          <g id="Union">
            <path d={svgPaths.p3aec8800} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p9211e00} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p3f57cf70} fill="var(--fill-0, black)" fillOpacity="0.42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleIcon1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Title & Icon">
      <p className="basis-0 font-['SF_Pro_Display:Semibold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">«Мой доход» 17% годовых</p>
      <Ic24X24UiInfo1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-[32px] px-0 relative shrink-0 w-full" data-name="🍎 Header 2">
      <TitleIcon1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.08px]">
        <p className="leading-[18px] whitespace-pre">
          <span>{`Вы получите `}</span>239 234,35₽
        </p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[18px]">Срок вклада 3 месяца</p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[295px]" data-name="Container">
      <CardHorizontalContainer3 />
      <CardHorizontalContainer4 />
    </div>
  );
}

function Ic24X24ServiceServiceValidation1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceValidation2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceValidation2">
          <path d={svgPaths.p16e9f380} fill="var(--fill-0, #359F58)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24ServiceServiceValidation1 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Частичное снятие</p>
      </div>
    </div>
  );
}

function Ic24X24UiCloseFilled1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / CloseFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / CloseFilled">
          <path d={svgPaths.p795f5c0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24UiCloseFilled1 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Пополнение</p>
      </div>
    </div>
  );
}

function FooterService1() {
  return <div className="h-[16px] shrink-0 w-full" data-name="🍎Footer Service" />;
}

function ButtonPrimary3() {
  return (
    <div className="bg-[#f26126] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] shrink-0 w-full" data-name="🍎Button 🧡Primary">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[15px] relative w-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Открыть вклад</p>
        </div>
      </div>
    </div>
  );
}

function DepositCards1() {
  return (
    <div className="bg-violet-50 relative rounded-[12px] shrink-0 w-full" data-name="Deposit cards">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-0 px-[24px] relative w-full">
          <Header2 />
          <Container1 />
          <ListBase2 />
          <ListBase3 />
          <FooterService1 />
          <ButtonPrimary3 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[24px] py-0 top-[1178px] w-[375px]">
      <DepositCards1 />
    </div>
  );
}

function Ic24X24UiInfo2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / Info">
          <g id="Union">
            <path d={svgPaths.p3aec8800} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p9211e00} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p3f57cf70} fill="var(--fill-0, black)" fillOpacity="0.42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleIcon2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Title & Icon">
      <p className="basis-0 font-['SF_Pro_Display:Semibold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">«Мой доход» 17% годовых</p>
      <Ic24X24UiInfo2 />
    </div>
  );
}

function Header3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-[32px] px-0 relative shrink-0 w-full" data-name="🍎 Header 2">
      <TitleIcon2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.08px]">
        <p className="leading-[18px] whitespace-pre">
          <span>{`Вы получите `}</span>239 234,35₽
        </p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[18px]">Срок вклада 3 месяца</p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[295px]" data-name="Container">
      <CardHorizontalContainer5 />
      <CardHorizontalContainer6 />
    </div>
  );
}

function Ic24X24ServiceServiceValidation2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceValidation2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceValidation2">
          <path d={svgPaths.p16e9f380} fill="var(--fill-0, #359F58)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase4() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24ServiceServiceValidation2 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Частичное снятие</p>
      </div>
    </div>
  );
}

function Ic24X24UiCloseFilled2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / CloseFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / CloseFilled">
          <path d={svgPaths.p795f5c0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase5() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24UiCloseFilled2 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Пополнение</p>
      </div>
    </div>
  );
}

function FooterService2() {
  return <div className="h-[16px] shrink-0 w-full" data-name="🍎Footer Service" />;
}

function ButtonPrimary4() {
  return (
    <div className="bg-[#f26126] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] shrink-0 w-full" data-name="🍎Button 🧡Primary">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[15px] relative w-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Открыть вклад</p>
        </div>
      </div>
    </div>
  );
}

function DepositCards2() {
  return (
    <div className="bg-violet-50 relative rounded-[12px] shrink-0 w-full" data-name="Deposit cards">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-0 px-[24px] relative w-full">
          <Header3 />
          <Container2 />
          <ListBase4 />
          <ListBase5 />
          <FooterService2 />
          <ButtonPrimary4 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[24px] py-0 top-[1906px] w-[375px]">
      <DepositCards2 />
    </div>
  );
}

function Ic24X24UiInfo3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / Info">
          <g id="Union">
            <path d={svgPaths.p3aec8800} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p9211e00} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p3f57cf70} fill="var(--fill-0, black)" fillOpacity="0.42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleIcon3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Title & Icon">
      <p className="basis-0 font-['SF_Pro_Display:Semibold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">«Мой доход» 17% годовых</p>
      <Ic24X24UiInfo3 />
    </div>
  );
}

function Header4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-[32px] px-0 relative shrink-0 w-full" data-name="🍎 Header 2">
      <TitleIcon3 />
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.08px]">
        <p className="leading-[18px] whitespace-pre">
          <span>{`Вы получите `}</span>239 234,35₽
        </p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[18px]">Срок вклада 3 месяца</p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[295px]" data-name="Container">
      <CardHorizontalContainer7 />
      <CardHorizontalContainer8 />
    </div>
  );
}

function Ic24X24ServiceServiceValidation3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceValidation2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceValidation2">
          <path d={svgPaths.p16e9f380} fill="var(--fill-0, #359F58)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase6() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24ServiceServiceValidation3 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Частичное снятие</p>
      </div>
    </div>
  );
}

function Ic24X24UiCloseFilled3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / CloseFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / CloseFilled">
          <path d={svgPaths.p795f5c0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase7() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24UiCloseFilled3 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Пополнение</p>
      </div>
    </div>
  );
}

function FooterService3() {
  return <div className="h-[16px] shrink-0 w-full" data-name="🍎Footer Service" />;
}

function ButtonPrimary5() {
  return (
    <div className="bg-[#f26126] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] shrink-0 w-full" data-name="🍎Button 🧡Primary">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[15px] relative w-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Открыть вклад</p>
        </div>
      </div>
    </div>
  );
}

function DepositCards3() {
  return (
    <div className="bg-violet-50 relative rounded-[12px] shrink-0 w-full" data-name="Deposit cards">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-0 px-[24px] relative w-full">
          <Header4 />
          <Container3 />
          <ListBase6 />
          <ListBase7 />
          <FooterService3 />
          <ButtonPrimary5 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[24px] py-0 top-[1514px] w-[375px]">
      <DepositCards3 />
    </div>
  );
}

function Ic24X24UiInfo4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / Info">
          <g id="Union">
            <path d={svgPaths.p3aec8800} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p9211e00} fill="var(--fill-0, black)" fillOpacity="0.42" />
            <path d={svgPaths.p3f57cf70} fill="var(--fill-0, black)" fillOpacity="0.42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleIcon4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Title & Icon">
      <p className="basis-0 font-['SF_Pro_Display:Semibold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">«Мой доход» 17% годовых</p>
      <Ic24X24UiInfo4 />
    </div>
  );
}

function Header5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[24px] pt-[32px] px-0 relative shrink-0 w-full" data-name="🍎 Header 2">
      <TitleIcon4 />
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.08px]">
        <p className="leading-[18px] whitespace-pre">
          <span>{`Вы получите `}</span>239 234,35₽
        </p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="🍎Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[18px]">Срок вклада 3 месяца</p>
      </div>
      <div className="h-[8px] shrink-0 w-[327px]" data-name="8 Pagging" />
    </div>
  );
}

function CardHorizontalContainer10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="🍎Card / Horizontal Container">
      <Text9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[295px]" data-name="Container">
      <CardHorizontalContainer9 />
      <CardHorizontalContainer10 />
    </div>
  );
}

function Ic24X24ServiceServiceValidation4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceValidation2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceValidation2">
          <path d={svgPaths.p16e9f380} fill="var(--fill-0, #359F58)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase8() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24ServiceServiceValidation4 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Частичное снятие</p>
      </div>
    </div>
  );
}

function Ic24X24UiCloseFilled4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / ui / CloseFilled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ui / CloseFilled">
          <path d={svgPaths.p795f5c0} fill="var(--fill-0, black)" fillOpacity="0.54" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ListBase9() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[6px] relative shrink-0 w-full" data-name="🍎List Base">
      <Ic24X24UiCloseFilled4 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
        <p className="leading-[18px]">Пополнение</p>
      </div>
    </div>
  );
}

function FooterService4() {
  return <div className="h-[16px] shrink-0 w-full" data-name="🍎Footer Service" />;
}

function ButtonPrimary6() {
  return (
    <div className="bg-[#f26126] relative rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] shrink-0 w-full" data-name="🍎Button 🧡Primary">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[15px] relative w-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Открыть вклад</p>
        </div>
      </div>
    </div>
  );
}

function DepositCards4() {
  return (
    <div className="bg-violet-50 relative rounded-[12px] shrink-0 w-full" data-name="Deposit cards">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-0 px-[24px] relative w-full">
          <Header5 />
          <Container4 />
          <ListBase8 />
          <ListBase9 />
          <FooterService4 />
          <ButtonPrimary6 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 px-[24px] py-0 top-[2242px] w-[375px]">
      <DepositCards4 />
    </div>
  );
}

function Header6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[32px] px-[24px] top-[584px] w-[375px]" data-name="🍎 Header 2">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px] w-[327px]">Самый выгодный вклад</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[32px] px-[24px] top-[1049px] w-[375px]" data-name="🍎 Header 3">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px] w-[327px]">Все подходящие вклады</p>
    </div>
  );
}

function TitleSubtitles() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title + Subtitles">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] w-full">
        <p className="leading-[24px]">Срок 3 месяца</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[299px]" data-name="Content">
      <TitleSubtitles />
    </div>
  );
}

function Ic24X24ServiceServiceArrowActive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic / 24x24 / Service / ServiceArrowActive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / Service / ServiceArrowActive">
          <path clipRule="evenodd" d={svgPaths.p10b80a00} fill="var(--fill-0, black)" fillOpacity="0.42" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function ListAccordion() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-start justify-between left-0 overflow-clip pl-[24px] pr-[16px] py-[12px] top-[656px] w-[375px]" data-name="🍎List Accordion #2">
      <Content4 />
      <Ic24X24ServiceServiceArrowActive />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function BarStatusBar() {
  return (
    <div className="absolute bg-white h-[44px] left-0 top-0 w-[375px]" data-name="🍎Bar / Status bar">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-[48px] not-italic text-[15px] text-black text-center text-nowrap top-[12px] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">9:41</p>
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_78.4%]" data-name="Cellular Connection">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 11">
            <path d={svgPaths.p19423980} fill="var(--fill-0, black)" id="Cellular Connection" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ic24X24ServiceArrowBackNavbar() {
  return (
    <div className="absolute inset-[22.73%]" data-name="ic / 24x24 / ServiceArrowBackNavbar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic / 24x24 / ServiceArrowBackNavbar">
          <path d={svgPaths.paaf6100} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function BoxForIconTapArea() {
  return (
    <div className="absolute bottom-0 left-[3.73%] right-[84.53%] top-0" data-name="box for icon - Tap Area">
      <Ic24X24ServiceArrowBackNavbar />
    </div>
  );
}

function Tools() {
  return (
    <div className="absolute bg-white h-[44px] left-0 top-[44px] w-[375px]" data-name="Tools">
      <div className="absolute flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] h-[24px] justify-center leading-[0] left-1/2 not-italic text-[15px] text-[rgba(0,0,0,0.87)] text-center top-1/2 tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%] w-[259px]">
        <p className="leading-[24px]">Калькулятор вкладов</p>
      </div>
      <BoxForIconTapArea />
    </div>
  );
}

function NavBarDefault() {
  return (
    <div className="bg-white h-[88px] relative shrink-0 w-[375px]" data-name="🍎Nav Bar / Default">
      <BarStatusBar />
      <Tools />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 top-0" data-name="Navigation">
      <NavBarDefault />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Калькулятор вкладов">
      <HeaderService />
      <CardHorizontalContainer />
      <ControlListCheckbox />
      <ControlListCheckbox1 />
      <ControlListCheckbox2 />
      <ControlListCheckbox3 />
      <InputSelect1 />
      <ButtonPrimary1 />
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame2 />
      <Frame4 />
      <Header6 />
      <Header1 />
      <ListAccordion />
      <Navigation />
    </div>
  );
}