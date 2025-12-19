import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-nndt8awzdw";
import closeSvg from "./imports/svg-tr0rz1pp8d";

interface Deposit {
  id: number;
  name: string;
  rateByTerm: Record<number, number>; // Ставки по срокам
  minTerm: number; // месяцев
  maxTerm: number; // месяцев
  minAmount: number; // рублей или юаней
  maxAmount: number | null; // null = без ограничений
  currency: string;
  replenishment: boolean;
  partialWithdrawal: boolean;
  capitalization: boolean;
  monthlyInterest: boolean;
}

const deposits: Deposit[] = [
  {
    id: 1,
    name: "Ставка на будущее",
    rateByTerm: {
      3: 15.0,
      6: 15.5,
      9: 16.0,
      12: 17.0,
    },
    minTerm: 3,
    maxTerm: 12,
    minAmount: 30000,
    maxAmount: null,
    currency: "₽",
    replenishment: false,
    partialWithdrawal: false,
    capitalization: false,
    monthlyInterest: false,
  },
  {
    id: 2,
    name: "Драгоценный",
    rateByTerm: {
      3: 15.4,
      6: 15.8,
      9: 16.2,
      12: 16.6,
    },
    minTerm: 3,
    maxTerm: 12,
    minAmount: 50000,
    maxAmount: null,
    currency: "₽",
    replenishment: false,
    partialWithdrawal: false,
    capitalization: false,
    monthlyInterest: false,
  },
  {
    id: 3,
    name: "Сильная ставка",
    rateByTerm: {
      3: 11.0,
      6: 12.5,
      9: 14.0,
      12: 15.0,
      18: 15.6,
      24: 16.2,
    },
    minTerm: 3,
    maxTerm: 24,
    minAmount: 100000,
    maxAmount: null,
    currency: "₽",
    replenishment: false,
    partialWithdrawal: false,
    capitalization: false,
    monthlyInterest: false,
  },
  {
    id: 4,
    name: "Мой доход",
    rateByTerm: {
      3: 11.5,
      6: 12.5,
      9: 13.5,
      12: 14.0,
      18: 14.8,
      24: 15.6,
    },
    minTerm: 3,
    maxTerm: 24,
    minAmount: 10000,
    maxAmount: null,
    currency: "₽",
    replenishment: true,
    partialWithdrawal: false,
    capitalization: false,
    monthlyInterest: false,
  },
  {
    id: 5,
    name: "Стабильный доход",
    rateByTerm: {
      6: 11.0,
      9: 12.0,
      12: 13.0,
      18: 14.0,
      24: 15.0,
    },
    minTerm: 6,
    maxTerm: 24,
    minAmount: 100000,
    maxAmount: null,
    currency: "₽",
    replenishment: false,
    partialWithdrawal: false,
    capitalization: false,
    monthlyInterest: true,
  },
  {
    id: 6,
    name: "Моя копилка",
    rateByTerm: {
      3: 10.0,
      6: 10.8,
      9: 11.4,
      12: 12.12,
    },
    minTerm: 3,
    maxTerm: 12,
    minAmount: 100000,
    maxAmount: 20000000,
    currency: "₽",
    replenishment: true,
    partialWithdrawal: false,
    capitalization: true,
    monthlyInterest: false,
  },
  {
    id: 7,
    name: "Мои возможности",
    rateByTerm: {
      3: 9.0,
      6: 9.8,
      9: 10.5,
      12: 11.1,
    },
    minTerm: 3,
    maxTerm: 12,
    minAmount: 100000,
    maxAmount: 20000000,
    currency: "₽",
    replenishment: true,
    partialWithdrawal: true,
    capitalization: true,
    monthlyInterest: false,
  },
  {
    id: 8,
    name: "В юанях",
    rateByTerm: {
      3: 2.5,
      6: 2.8,
      9: 3.0,
      12: 3.2,
      18: 3.4,
      24: 3.5,
    },
    minTerm: 3,
    maxTerm: 24,
    minAmount: 10000,
    maxAmount: null,
    currency: "¥",
    replenishment: false,
    partialWithdrawal: false,
    capitalization: false,
    monthlyInterest: false,
  },
  {
    id: 9,
    name: "Социальный вклад",
    rateByTerm: {
      12: 17.0,
    },
    minTerm: 12,
    maxTerm: 12,
    minAmount: 1,
    maxAmount: 50000,
    currency: "₽",
    replenishment: true,
    partialWithdrawal: true,
    capitalization: false,
    monthlyInterest: true,
  },
];

export default function Component() {
  const [amount, setAmount] = useState("300 000");
  const [currency, setCurrency] = useState("₽");
  const [term, setTerm] = useState("Любой срок");
  const [termMonths, setTermMonths] = useState(3);
  const [withReplenishment, setWithReplenishment] = useState(false);
  const [withPartialWithdrawal, setWithPartialWithdrawal] = useState(false);
  const [withMonthlyPayment, setWithMonthlyPayment] = useState(false);
  const [withCapitalization, setWithCapitalization] = useState(false);
  const [showTermOptions, setShowTermOptions] = useState(false);
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(true);
  const [expandedTerms, setExpandedTerms] = useState<Record<number, boolean>>({});

  const calculateReturn = (principal: number, rate: number, months: number, withCap: boolean = false) => {
    if (withCap) {
      // Капитализация
      const monthlyRate = rate / 100 / 12;
      const finalAmount = principal * Math.pow(1 + monthlyRate, months);
      return finalAmount;
    } else {
      // Простой процент
      const yearlyInterest = principal * (rate / 100);
      const totalInterest = (yearlyInterest / 12) * months;
      return principal + totalInterest;
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatRate = (rate: number) => {
    return rate.toString().replace('.', ',');
  };

  const getNumericAmount = () => {
    return parseFloat(amount.replace(/\s/g, ''));
  };

  const filteredDeposits = deposits.filter((deposit) => {
    const numericAmount = getNumericAmount();
    
    // Фильтр по валюте
    if (deposit.currency !== currency) return false;
    
    // Фильтр по сумме
    if (numericAmount < deposit.minAmount) return false;
    if (deposit.maxAmount && numericAmount > deposit.maxAmount) return false;
    
    // Фильтр по сроку - проверяем что хотя бы один срок подходит
    // Не исключаем вклад полностью, если выбран конкретный срок
    
    // Фильтр по пополнению
    if (withReplenishment && !deposit.replenishment) return false;
    
    // Фильтр по частичному снятию
    if (withPartialWithdrawal && !deposit.partialWithdrawal) return false;
    
    // Фильтр по ежемесячной выплате процентов
    if (withMonthlyPayment && !deposit.monthlyInterest) return false;
    
    // Фильтр по капитализации
    if (withCapitalization && !deposit.capitalization) return false;
    
    return true;
  });

  // Генерируем врианты с разными сроками
  const depositVariants: Array<Deposit & { termMonths: number }> = [];
  const termOptions = [3, 6, 9, 12, 18, 24];
  
  filteredDeposits.forEach((deposit) => {
    termOptions.forEach((months) => {
      // Проверяем, подходит ли этот срок для данного вклада
      if (months >= deposit.minTerm && months <= deposit.maxTerm) {
        // Если выбран конкретный срок, показываем только его
        if (term !== "Любой срок" && months !== termMonths) {
          return;
        }
        depositVariants.push({
          ...deposit,
          termMonths: months,
        });
      }
    });
  });

  // Сортируем по доходности
  const sortedDeposits = [...depositVariants].sort((a, b) => {
    const returnA = calculateReturn(getNumericAmount(), a.rateByTerm[a.termMonths], a.termMonths, a.capitalization);
    const returnB = calculateReturn(getNumericAmount(), b.rateByTerm[b.termMonths], b.termMonths, b.capitalization);
    return returnB - returnA;
  });

  const bestDeposit = sortedDeposits[0];
  const otherDeposits = sortedDeposits.slice(1);

  // Группируем другие вклады по срокам
  const depositsByTerm: Record<number, Array<Deposit & { termMonths: number }>> = {};
  otherDeposits.forEach((deposit) => {
    if (!depositsByTerm[deposit.termMonths]) {
      depositsByTerm[deposit.termMonths] = [];
    }
    depositsByTerm[deposit.termMonths].push(deposit);
  });

  // Получаем отсортированный массив сроков
  const sortedTerms = Object.keys(depositsByTerm)
    .map(Number)
    .sort((a, b) => a - b);

  // Инициализируем все аккордеоны в раскрытом состоянии
  useEffect(() => {
    const initialExpandedState: Record<number, boolean> = {};
    sortedTerms.forEach(termMonth => {
      initialExpandedState[termMonth] = true;
    });
    setExpandedTerms(initialExpandedState);
  }, [sortedTerms.join(',')]);

  const toggleTerm = (termMonths: number) => {
    setExpandedTerms(prev => ({
      ...prev,
      [termMonths]: !prev[termMonths]
    }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    setAmount(formatted);
  };

  const handleTermSelect = (months: number) => {
    setTermMonths(months);
    setTerm(`${months} ${months === 1 ? 'месяц' : months < 5 ? 'месяца' : 'месяцев'}`);
    setShowTermOptions(false);
  };

  const handleCurrencySelect = (curr: string) => {
    setCurrency(curr);
    setShowCurrencyOptions(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
      {/* iPhone 16 Mockup */}
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative bg-black rounded-[60px] p-[14px] shadow-2xl">
          {/* Screen Border with Gradient */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[46px] p-[2px]">
            {/* Screen */}
            <div className="relative bg-white rounded-[44px] overflow-hidden w-[375px] h-[812px]">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[60] w-[126px] h-[37px] bg-black rounded-b-[20px]" />
              
              {/* App Content */}
              <div className="bg-white relative w-[375px] h-[812px] overflow-y-auto pb-[60px]" data-name="Калькулятор вкладов">
      {/* Navigation */}
      <div className="bg-white sticky top-0 z-50" data-name="Navigation">
        <div className="bg-white h-[88px]" data-name="🍎Nav Bar / Default">
          {/* Status Bar */}
          <div className="bg-white h-[44px]" data-name="🍎Bar / Status bar">
            <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-[48px] not-italic text-[15px] text-black text-center text-nowrap top-[12px] tracking-[-0.24px] translate-x-[-50%] whitespace-pre">9:41</p>
            {/* Battery */}
            <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 25 12">
                <g id="Battery">
                  <rect height="10.3333" id="Border" rx="2.16667" stroke="black" width="21" x="0.5" y="0.5" />
                  <path d={svgPaths.p9ed9280} fill="black" id="Cap" />
                  <rect fill="black" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
                </g>
              </svg>
            </div>
            {/* Cellular */}
            <div className="absolute inset-[39.39%_11.64%_35.61%_78.4%]" data-name="Cellular Connection">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 38 11">
                <path d={svgPaths.p19423980} fill="black" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          {/* Tools */}
          <div className="bg-white h-[44px]" data-name="Tools">
            <div className="absolute flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] h-[24px] justify-center leading-[0] left-1/2 not-italic text-[15px] text-[rgba(0,0,0,0.87)] text-center top-[54px] tracking-[-0.24px] translate-x-[-50%] translate-y-[-50%]">
              <p className="leading-[24px]">Калькулятор вкладов</p>
            </div>
            {/* Back button */}
            <div className="absolute left-[14px] top-[54px] translate-y-[-50%] cursor-pointer">
              <div className="size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d={svgPaths.paaf6100} fill="black" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-[12px]" data-name="🍎Header Service" />

      {/* Input Section */}
      <div className="bg-white box-border flex gap-[16px] px-[24px] py-0" data-name="🍎Card / Horizontal Container">
        {/* Amount Input */}
        <div className="w-1/2 bg-white box-border flex px-0 py-[8px]" data-name="🍎Input Amount">
          <div className="basis-0 flex flex-col gap-[4px] grow" data-name="Input+Hint">
            <div className="bg-neutral-100 rounded-[12px] w-full" data-name="Input-body">
              <div className="flex flex-row items-center size-full">
                <div className="box-border flex gap-[8px] items-center px-[16px] py-[10px] w-full">
                  <div className="basis-0 flex flex-col gap-[4px] grow">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[12px] text-[rgba(0,0,0,0.54)]">
                      <p className="leading-[16px]">Сумма вклада</p>
                    </div>
                    <input
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      className="bg-transparent font-['SF_Pro_Text:Regular',sans-serif] leading-[24px] not-italic text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] outline-none border-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="box-border flex pl-[16px] pr-0 py-0 w-full">
                <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] grow justify-center leading-[0] not-italic text-[12px] text-[rgba(0,0,0,0.54)]">
                  <p className="leading-[16px]">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Currency Select */}
        <div className="w-1/2 bg-white box-border flex px-0 py-[8px]" data-name="🍎Input Select">
          <div className="basis-0 flex flex-col gap-[4px] grow">
            <div 
              className="bg-neutral-100 rounded-[12px] w-full cursor-pointer" 
              onClick={() => setShowCurrencyOptions(!showCurrencyOptions)}
            >
              <div className="flex flex-row items-center size-full">
                <div className="box-border flex gap-[8px] items-center px-[16px] py-[10px] w-full">
                  <div className="basis-0 flex flex-col gap-[4px] grow">
                    <div className="flex flex-col justify-center text-[12px] text-[rgba(0,0,0,0.54)] font-['SF_Pro_Text:Regular',sans-serif] not-italic leading-[0]">
                      <p className="leading-[16px]">Валюта</p>
                    </div>
                    <div className="flex flex-col justify-center text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] font-['SF_Pro_Text:Regular',sans-serif] not-italic leading-[0]">
                      <p className="leading-[24px]">{currency}</p>
                    </div>
                  </div>
                  <div className="size-[24px] flex-shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPaths.p31f45f00} fill="black" fillOpacity="0.42" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="box-border flex pl-[16px] pr-0 py-0 w-full">
                <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] grow justify-center leading-[0] not-italic text-[12px] text-[rgba(0,0,0,0.54)]">
                  <p className="leading-[16px]">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Term Select */}
      <div className="bg-white box-border flex h-[100px] px-[24px] py-[8px]" data-name="🍎Input Select">
        <div className="basis-0 flex flex-col gap-[4px] grow">
          <div 
            className="bg-neutral-100 rounded-[12px] w-full cursor-pointer" 
            onClick={() => setShowTermOptions(!showTermOptions)}
          >
            <div className="flex flex-row items-center size-full">
              <div className="box-border flex gap-[8px] items-center px-[16px] py-[10px] w-full">
                <div className="basis-0 flex flex-col gap-[4px] grow">
                  <div className="flex flex-col justify-center text-[12px] text-[rgba(0,0,0,0.54)] font-['SF_Pro_Text:Regular',sans-serif] not-italic leading-[0]">
                    <p className="leading-[16px]">Срок вклада</p>
                  </div>
                  <div className="flex flex-col justify-center text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] font-['SF_Pro_Text:Regular',sans-serif] not-italic leading-[0]">
                    <p className="leading-[24px]">{term}</p>
                  </div>
                </div>
                <div className="size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d={svgPaths.p31f45f00} fill="black" fillOpacity="0.42" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="bg-white box-border flex flex-col px-[24px] py-[12px]" data-name="🍎Control List / Checkbox">
        <div 
          className="flex gap-[12px] items-start overflow-clip cursor-pointer"
          onClick={() => setWithReplenishment(!withReplenishment)}
        >
          <div className="size-[24px]">
            <div className={`m-[3px] rounded-[4px] size-[18px] ${withReplenishment ? 'bg-[#383AD1]' : 'bg-[rgba(0,0,0,0.12)]'} flex items-center justify-center`}>
              {withReplenishment && (
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6L4.5 8.5L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <div className="basis-0 flex flex-col grow">
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px]">
              <p className="leading-[22px]">С пополнением</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white box-border flex flex-col px-[24px] py-[12px]" data-name="🍎Control List / Checkbox">
        <div 
          className="flex gap-[12px] items-start overflow-clip cursor-pointer"
          onClick={() => setWithPartialWithdrawal(!withPartialWithdrawal)}
        >
          <div className="size-[24px]">
            <div className={`m-[3px] rounded-[4px] size-[18px] ${withPartialWithdrawal ? 'bg-[#383AD1]' : 'bg-[rgba(0,0,0,0.12)]'} flex items-center justify-center`}>
              {withPartialWithdrawal && (
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6L4.5 8.5L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <div className="basis-0 flex flex-col grow">
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px]">
              <p className="leading-[22px]">С частичным снятием</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white box-border flex flex-col px-[24px] py-[12px]" data-name="🍎Control List / Checkbox">
        <div 
          className="flex gap-[12px] items-start overflow-clip cursor-pointer"
          onClick={() => setWithMonthlyPayment(!withMonthlyPayment)}
        >
          <div className="size-[24px]">
            <div className={`m-[3px] rounded-[4px] size-[18px] ${withMonthlyPayment ? 'bg-[#383AD1]' : 'bg-[rgba(0,0,0,0.12)]'} flex items-center justify-center`}>
              {withMonthlyPayment && (
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6L4.5 8.5L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <div className="basis-0 flex flex-col grow">
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px]">
              <p className="leading-[22px]">Выплата % ежемесячно</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white box-border flex flex-col px-[24px] py-[12px]" data-name="🍎Control List / Checkbox">
        <div 
          className="flex gap-[12px] items-start overflow-clip cursor-pointer"
          onClick={() => setWithCapitalization(!withCapitalization)}
        >
          <div className="size-[24px]">
            <div className={`m-[3px] rounded-[4px] size-[18px] ${withCapitalization ? 'bg-[#383AD1]' : 'bg-[rgba(0,0,0,0.12)]'} flex items-center justify-center`}>
              {withCapitalization && (
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6L4.5 8.5L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <div className="basis-0 flex flex-col grow">
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px]">
              <p className="leading-[22px]">Капитализация</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="box-border flex flex-col gap-[10px] px-[24px] py-[20px]" data-name="🍎Button 🧡Primary">
        <div className="bg-[#f26126] rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] w-full cursor-pointer hover:bg-[#d9521f] transition-colors">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border flex flex-col items-center px-[24px] py-[15px] w-full">
              <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Подобрать</p>
            </div>
          </div>
        </div>
      </div>

      {/* Term Selection Modal */}
      {showTermOptions && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-[24px]" onClick={() => setShowTermOptions(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <div className="absolute right-0 size-[32px] -top-[52px] cursor-pointer" onClick={() => setShowTermOptions(false)}>
              <div className="absolute inset-[-25%_-37.5%_-50%_-37.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                  <g filter="url(#filter0_dd_term)" id="Button Close">
                    <circle cx="28" cy="24" fill="white" id="BG" r="16" />
                    <g id="ic / 16x16 / ui / SmallClose2">
                      <path d={closeSvg.pad8e1b0} fill="black" id="Union" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_dd_term" width="56" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="6" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_term" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="4" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.227451 0 0 0 0 0.227451 0 0 0 0 0.266667 0 0 0 0.08 0" />
                      <feBlend in2="effect1_dropShadow_term" mode="normal" result="effect2_dropShadow_term" />
                      <feBlend in="SourceGraphic" in2="effect2_dropShadow_term" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Modal Content */}
            <div className="bg-white box-border content-stretch flex flex-col items-center justify-center pb-0 pt-[16px] px-0 rounded-[12px] shadow-[0px_8px_16px_0px_rgba(58,58,68,0.16),0px_16px_32px_0px_rgba(90,91,106,0.08)] w-[327px]">
              {/* Header */}
              <div className="relative shrink-0 w-full">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
                    <p className="basis-0 font-['SF_Pro_Text:Semibold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] tracking-[-0.084px]">Срок вклада</p>
                  </div>
                </div>
              </div>
              
              {/* Footer Service */}
              <div className="h-[8px] shrink-0 w-full" />
              
              {/* Options */}
              <div 
                className={`relative shrink-0 w-full cursor-pointer hover:bg-neutral-50 ${term === "Любой срок" ? 'bg-violet-50' : 'bg-white'}`}
                onClick={() => { setTerm("Любой срок"); setTermMonths(3); setShowTermOptions(false); }}
              >
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] flex-1">Любой срок</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {[3, 6, 9, 12, 18, 24].map((months) => (
                <div 
                  key={months}
                  className={`relative shrink-0 w-full cursor-pointer hover:bg-neutral-50 ${term === `${months} ${months === 1 ? 'месяц' : months < 5 ? 'месяца' : 'месяцев'}` ? 'bg-violet-50' : 'bg-white'}`}
                  onClick={() => handleTermSelect(months)}
                >
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] flex-1">
                          {months} {months === 1 ? 'месяц' : months < 5 ? 'месяца' : 'месяцев'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Footer Service */}
              <div className="h-[8px] shrink-0 w-full" />
            </div>
          </div>
        </div>
      )}

      {/* Currency Selection Modal */}
      {showCurrencyOptions && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-[24px]" onClick={() => setShowCurrencyOptions(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <div className="absolute right-0 size-[32px] -top-[52px] cursor-pointer" onClick={() => setShowCurrencyOptions(false)}>
              <div className="absolute inset-[-25%_-37.5%_-50%_-37.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
                  <g filter="url(#filter0_dd_currency)" id="Button Close">
                    <circle cx="28" cy="24" fill="white" id="BG" r="16" />
                    <g id="ic / 16x16 / ui / SmallClose2">
                      <path d={closeSvg.pad8e1b0} fill="black" id="Union" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_dd_currency" width="56" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="6" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_currency" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="4" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.227451 0 0 0 0 0.227451 0 0 0 0 0.266667 0 0 0 0.08 0" />
                      <feBlend in2="effect1_dropShadow_currency" mode="normal" result="effect2_dropShadow_currency" />
                      <feBlend in="SourceGraphic" in2="effect2_dropShadow_currency" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Modal Content */}
            <div className="bg-white box-border content-stretch flex flex-col items-center justify-center pb-0 pt-[16px] px-0 rounded-[12px] shadow-[0px_8px_16px_0px_rgba(58,58,68,0.16),0px_16px_32px_0px_rgba(90,91,106,0.08)] w-[327px]">
              {/* Header */}
              <div className="relative shrink-0 w-full">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
                    <p className="basis-0 font-['SF_Pro_Text:Semibold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.54)] tracking-[-0.084px]">Валюта вклада</p>
                  </div>
                </div>
              </div>
              
              {/* Footer Service */}
              <div className="h-[8px] shrink-0 w-full" />
              
              {/* Ruble Option */}
              <div 
                className={`relative shrink-0 w-full cursor-pointer hover:bg-neutral-50 ${currency === "₽" ? 'bg-violet-50' : 'bg-white'}`}
                onClick={() => handleCurrencySelect("₽")}
              >
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] flex-1">Российский рубль</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Yuan Option */}
              <div 
                className={`relative shrink-0 w-full cursor-pointer hover:bg-neutral-50 ${currency === "¥" ? 'bg-violet-50' : 'bg-white'}`}
                onClick={() => handleCurrencySelect("¥")}
              >
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px] flex-1">Китайский юань</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer Service */}
              <div className="h-[8px] shrink-0 w-full" />
            </div>
          </div>
        </div>
      )}

      {sortedDeposits.length === 0 ? (
        <div className="box-border flex flex-col items-center px-[24px] py-[40px]">
          <div className="mb-[16px]">
            <svg className="size-[64px]" fill="none" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="30" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
              <path d="M32 20V36M32 44V44.01" stroke="rgba(0,0,0,0.42)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] text-[20px] text-[rgba(0,0,0,0.87)] mb-[8px] text-center">Нет подходящих вкладов</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.54)] text-center">Попробуйте изменить параметры поиска или снять некоторые фильтры</p>
        </div>
      ) : (
        <>
          {/* Results Header */}
          <div className="bg-white box-border flex flex-col pb-[16px] pt-[32px] px-[24px]" data-name="🍎 Header 2">
            <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[24px] not-italic text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">Самый выгодный вклад</p>
          </div>

          {/* Accordion */}
          <div className="bg-white box-border flex items-start justify-between overflow-clip pl-[24px] pr-[16px] py-[12px] cursor-pointer" onClick={() => setIsCardExpanded(!isCardExpanded)}>
            <div className="flex gap-[12px] items-start w-[299px]">
              <div className="basis-0 flex flex-col gap-[4px] grow">
                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px]">
                  <p className="leading-[24px]">Срок {bestDeposit.termMonths} {bestDeposit.termMonths === 1 ? 'месяц' : bestDeposit.termMonths < 5 ? 'месяца' : 'месяцев'}</p>
                </div>
              </div>
            </div>
            <div className={`size-[24px] transition-transform duration-300 ${isCardExpanded ? '' : 'rotate-180'}`}>
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.p10b80a00} fill="black" fillOpacity="0.42" fillRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Best Deposit Card */}
          {bestDeposit && (
            <div className={`box-border flex flex-col gap-[10px] px-[24px] py-0 overflow-hidden transition-all duration-300 ${isCardExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-violet-50 rounded-[12px] w-full">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="box-border flex flex-col pb-[24px] pt-0 px-[24px] w-full">
                    {/* Header */}
                    <div className="box-border flex flex-col pb-[24px] pt-[32px] px-0 w-full">
                      <div className="flex gap-[12px] items-start w-full">
                        <p className="basis-0 font-['SF_Pro_Display:Semibold',sans-serif] grow leading-[24px] not-italic text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">«{bestDeposit.name}» {formatRate(bestDeposit.rateByTerm[bestDeposit.termMonths])}% годовых</p>
                        <div className="size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPaths.p3aec8800} fill="black" fillOpacity="0.42" />
                            <path d={svgPaths.p9211e00} fill="black" fillOpacity="0.42" />
                            <path d={svgPaths.p3f57cf70} fill="black" fillOpacity="0.42" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="flex flex-col w-[295px]">
                      <div className="flex gap-[4px] w-full">
                        <div className="basis-0 flex flex-col grow overflow-clip">
                          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.08px]">
                            <p className="leading-[18px] whitespace-pre">
                              <span>Вы получите </span>{formatNumber(calculateReturn(getNumericAmount(), bestDeposit.rateByTerm[bestDeposit.termMonths], bestDeposit.termMonths, bestDeposit.capitalization))}{bestDeposit.currency}
                            </p>
                          </div>
                          <div className="h-[8px]" />
                        </div>
                      </div>
                      <div className="flex gap-[4px] w-full">
                        <div className="basis-0 flex flex-col grow overflow-clip">
                          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px]">
                            <p className="leading-[18px]">Срок вклада {bestDeposit.termMonths} {bestDeposit.termMonths === 1 ? 'месяц' : bestDeposit.termMonths < 5 ? 'месяца' : 'месяцев'}</p>
                          </div>
                          <div className="h-[8px]" />
                        </div>
                      </div>
                    </div>
                    {/* Features */}
                    <div className="box-border flex gap-[12px] items-center px-0 py-[6px] w-full">
                      <div className="size-[24px] flex-shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                          <path d={bestDeposit.partialWithdrawal ? svgPaths.p16e9f380 : svgPaths.p795f5c0} fill={bestDeposit.partialWithdrawal ? "#359F58" : "black"} fillOpacity={bestDeposit.partialWithdrawal ? "1" : "0.54"} />
                        </svg>
                      </div>
                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
                        <p className="leading-[18px]">Частичное снятие</p>
                      </div>
                    </div>
                    <div className="box-border flex gap-[12px] items-center px-0 py-[6px] w-full">
                      <div className="size-[24px] flex-shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                          <path d={bestDeposit.replenishment ? svgPaths.p16e9f380 : svgPaths.p795f5c0} fill={bestDeposit.replenishment ? "#359F58" : "black"} fillOpacity={bestDeposit.replenishment ? "1" : "0.54"} />
                        </svg>
                      </div>
                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
                        <p className="leading-[18px]">Пополнение</p>
                      </div>
                    </div>
                    <div className="h-[16px]" />
                    {/* Button */}
                    <div className="bg-[#f26126] rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] w-full cursor-pointer hover:bg-[#d9521f] transition-colors">
                      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                        <div className="box-border flex flex-col items-center px-[24px] py-[15px] w-full">
                          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Открыть вклад</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Deposits Header */}
          {otherDeposits.length > 0 && (
            <>
              <div className="bg-white box-border flex flex-col pb-[16px] pt-[32px] px-[24px]" data-name="🍎 Header 3">
                <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[24px] not-italic text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">Все подходящие вклады</p>
              </div>

              {/* Grouped by Term */}
              {sortedTerms.map((termMonth) => (
                <div key={termMonth}>
                  {/* Accordion for each term */}
                  <div className="bg-white box-border flex items-start justify-between overflow-clip pl-[24px] pr-[16px] py-[12px] cursor-pointer" onClick={() => toggleTerm(termMonth)}>
                    <div className="flex gap-[12px] items-start w-[299px]">
                      <div className="basis-0 flex flex-col gap-[4px] grow">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[17px] text-[rgba(0,0,0,0.87)] tracking-[-0.408px]">
                          <p className="leading-[24px]">Срок {termMonth} {termMonth === 1 ? 'месяц' : termMonth < 5 ? 'месяца' : 'месяцев'}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`size-[24px] transition-transform duration-300 ${expandedTerms[termMonth] ? '' : 'rotate-180'}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d={svgPaths.p10b80a00} fill="black" fillOpacity="0.42" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Deposit Cards for this term */}
                  <div className={`overflow-hidden transition-all duration-300 ${expandedTerms[termMonth] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {depositsByTerm[termMonth].map((deposit) => (
                      <div key={`${deposit.id}-${deposit.termMonths}`} className="box-border flex flex-col gap-[10px] px-[24px] py-0 mb-[24px]">
                        <div className="bg-violet-50 rounded-[12px] w-full">
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="box-border flex flex-col pb-[24px] pt-0 px-[24px] w-full">
                              {/* Header */}
                              <div className="box-border flex flex-col pb-[24px] pt-[32px] px-0 w-full">
                                <div className="flex gap-[12px] items-start w-full">
                                  <p className="basis-0 font-['SF_Pro_Display:Semibold',sans-serif] grow leading-[24px] not-italic text-[20px] text-[rgba(0,0,0,0.87)] tracking-[0.38px]">«{deposit.name}» {formatRate(deposit.rateByTerm[deposit.termMonths])}% годовых</p>
                                  <div className="size-[24px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                      <path d={svgPaths.p3aec8800} fill="black" fillOpacity="0.42" />
                                      <path d={svgPaths.p9211e00} fill="black" fillOpacity="0.42" />
                                      <path d={svgPaths.p3f57cf70} fill="black" fillOpacity="0.42" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              {/* Info */}
                              <div className="flex flex-col w-[295px]">
                                <div className="flex gap-[4px] w-full">
                                  <div className="basis-0 flex flex-col grow overflow-clip">
                                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.08px]">
                                      <p className="leading-[18px] whitespace-pre">
                                        <span>Вы получите </span>{formatNumber(calculateReturn(getNumericAmount(), deposit.rateByTerm[deposit.termMonths], deposit.termMonths, deposit.capitalization))}{deposit.currency}
                                      </p>
                                    </div>
                                    <div className="h-[8px]" />
                                  </div>
                                </div>
                                <div className="flex gap-[4px] w-full">
                                  <div className="basis-0 flex flex-col grow overflow-clip">
                                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px]">
                                      <p className="leading-[18px]">Срок вклада {deposit.termMonths} {deposit.termMonths === 1 ? 'месяц' : deposit.termMonths < 5 ? 'месяца' : 'месяцев'}</p>
                                    </div>
                                    <div className="h-[8px]" />
                                  </div>
                                </div>
                              </div>
                              {/* Features */}
                              <div className="box-border flex gap-[12px] items-center px-0 py-[6px] w-full">
                                <div className="size-[24px] flex-shrink-0">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path d={deposit.partialWithdrawal ? svgPaths.p16e9f380 : svgPaths.p795f5c0} fill={deposit.partialWithdrawal ? "#359F58" : "black"} fillOpacity={deposit.partialWithdrawal ? "1" : "0.54"} />
                                  </svg>
                                </div>
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
                                  <p className="leading-[18px]">Частичное снятие</p>
                                </div>
                              </div>
                              <div className="box-border flex gap-[12px] items-center px-0 py-[6px] w-full">
                                <div className="size-[24px] flex-shrink-0">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path d={deposit.replenishment ? svgPaths.p16e9f380 : svgPaths.p795f5c0} fill={deposit.replenishment ? "#359F58" : "black"} fillOpacity={deposit.replenishment ? "1" : "0.54"} />
                                  </svg>
                                </div>
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.87)] tracking-[-0.08px] w-[291px]">
                                  <p className="leading-[18px]">Пополнение</p>
                                </div>
                              </div>
                              <div className="h-[16px]" />
                              {/* Button */}
                              <div className="bg-[#f26126] rounded-[12px] shadow-[0px_4px_8px_0px_rgba(58,58,68,0.16),0px_8px_16px_0px_rgba(90,91,106,0.16)] w-full cursor-pointer hover:bg-[#d9521f] transition-colors">
                                <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                                  <div className="box-border flex flex-col items-center px-[24px] py-[15px] w-full">
                                    <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic text-[17px] text-center text-nowrap text-white tracking-[-0.408px] whitespace-pre">Открыть вклад</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}