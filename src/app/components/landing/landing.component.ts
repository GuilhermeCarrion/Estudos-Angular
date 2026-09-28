import { Component, HostListener } from '@angular/core';
import {
  LucideArrowRight,
  LucideBadgeCheck,
  LucideBot,
  LucideBrainCircuit,
  LucideChartColumn,
  LucideCheck,
  LucideChevronDown,
  LucideClock3,
  LucideCodeXml,
  LucideDynamicIcon,
  LucideFileText,
  LucideHeadphones,
  LucideIcon,
  LucideImage as LucideImageIcon,
  LucideLock,
  LucideMegaphone,
  LucideMenu,
  LucideMessageCircle,
  LucideMessagesSquare,
  LucideMinus,
  LucideNetwork,
  LucidePanelTop,
  LucidePlus,
  LucideRadio,
  LucideRocket,
  LucideSend,
  LucideSettings2,
  LucideShieldCheck,
  LucideSparkles,
  LucideSquareKanban,
  LucideTags,
  LucideUsers,
  LucideWorkflow,
  LucideX,
  LucideZap,
} from '@lucide/angular';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  detailTitle: string;
  detailText: string;
  highlights: string[];
  imageLabel: string;
  image: string;
}

interface TrustCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-landing',
  imports: [LucideDynamicIcon],
  template: `
    <main class="min-h-dvh bg-white text-slate-900" id="inicio">
      <!-- header -->
      <header
        class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl"
      >
        <div
          class="mx-auto flex h-18 max-w-7xl items-center justify-between py-4 px-5 lg:px-8"
        >
          <a
            href="#inicio"
            (click)="scrollTo($event, 'inicio')"
            class="flex items-center gap-2.5"
            aria-label="ContatoZap início"
          >
            <span
              class="flex size-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
            >
              <svg
                [lucideIcon]="MessageCircle"
                class="size-5"
                aria-hidden="true"
              ></svg>
            </span>
            <span class="text-lg font-bold tracking-tight text-slate-950"
              >Contato<span class="text-emerald-600">Zap</span></span
            >
          </a>

          <nav
            class="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            <a
              href="#como-funciona"
              (click)="scrollTo($event, 'como-funciona')"
              class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700"
              >Como funciona</a
            >
            <a
              href="#recursos"
              (click)="scrollTo($event, 'recursos')"
              class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700"
              >Recursos</a
            >
            <!-- <a href="#planos" class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700">Planos</a> -->
            <a
              href="#faq"
              (click)="scrollTo($event, 'faq')"
              class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700"
              >Dúvidas</a
            >
          </nav>

          <div class="hidden items-center gap-3 md:flex">
            <a
              href="#contato"
              (click)="scrollTo($event, 'contato')"
              class="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 text-sm font-medium text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700"
            >
              Começar agora
              <svg
                [lucideIcon]="ArrowRight"
                class="size-4"
                aria-hidden="true"
              ></svg>
            </a>
          </div>

          <button
            type="button"
            (click)="mobileMenuOpen = !mobileMenuOpen"
            [attr.aria-expanded]="mobileMenuOpen"
            aria-controls="mobile-menu"
            [attr.aria-label]="mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
            class="inline-flex size-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          >
            @if (mobileMenuOpen) {
              <svg [lucideIcon]="X" class="size-5" aria-hidden="true"></svg>
            } @else {
              <svg [lucideIcon]="Menu" class="size-5" aria-hidden="true"></svg>
            }
          </button>
        </div>

        @if (mobileMenuOpen) {
          <div
            id="mobile-menu"
            class="border-t border-slate-200/70 bg-white px-5 pb-5 pt-3 md:hidden"
          >
            <nav
              class="flex flex-col gap-1"
              aria-label="Navegação principal mobile"
            >
              <a
                href="#como-funciona"
                (click)="
                  scrollTo($event, 'como-funciona'); mobileMenuOpen = false
                "
                class="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-emerald-700"
                >Como funciona</a
              >
              <a
                href="#recursos"
                (click)="scrollTo($event, 'recursos'); mobileMenuOpen = false"
                class="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-emerald-700"
                >Recursos</a
              >
              <a
                href="#faq"
                (click)="scrollTo($event, 'faq'); mobileMenuOpen = false"
                class="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-emerald-700"
                >Dúvidas</a
              >
            </nav>
            <a
              href="#contato"
              (click)="scrollTo($event, 'contato'); mobileMenuOpen = false"
              class="mt-3 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700"
            >
              Começar agora
              <svg
                [lucideIcon]="ArrowRight"
                class="size-4"
                aria-hidden="true"
              ></svg>
            </a>
          </div>
        }
      </header>

      <!-- Hero -->
      <section
        class="relative overflow-hidden bg-gradient-to-br from-white via-white to-emerald-50/50"
      >
        <div
          class="absolute right-0 top-0 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl"
        ></div>
        <div
          class="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-28 lg:pt-24"
        >
          <!-- No mobile este bloco vira flex-col com "order" por item, para
               reordenar (texto -> imagem -> badge) e centralizar o texto sem
               afetar o layout original do desktop (lg:block ignora "order"). -->
          <div
            class="relative flex flex-col gap-6 text-center lg:block lg:gap-0 lg:text-left"
          >
            <!-- Certificação em destaque: Meta Business Partner -->
            <div
              class="order-5 inline-flex items-center gap-2.5 self-center rounded-xl border border-emerald-200 bg-linear-to-r from-emerald-50 to-teal-50 px-3.5 py-2 shadow-sm shadow-emerald-900/5 ring-1 ring-emerald-100 lg:order-none lg:mb-6 lg:self-auto"
            >
              <span
                class="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
              >
                <svg
                  [lucideIcon]="BadgeCheck"
                  class="size-5"
                  aria-hidden="true"
                ></svg>
              </span>
              <span class="flex flex-col leading-tight">
                <span
                  class="text-xs font-semibold uppercase tracking-wider text-emerald-700"
                  >Empresa certificada</span
                >
                <span class="text-sm font-bold text-slate-900"
                  >Meta Business Partner</span
                >
              </span>
            </div>
            <h1
              class="order-1 max-w-xl text-[clamp(2rem,1.3rem+3vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 lg:order-none"
            >
              Todo atendimento.
              <span class="block text-emerald-600">Um só lugar.</span>
            </h1>
            <p
              class="order-2 max-w-lg text-lg leading-8 text-slate-600 lg:order-none lg:mt-6"
            >
              Centralize o atendimento via WhatsApp da sua empresa com a API
              Oficial da Meta — seguro, estável e pronto para escalar.
            </p>

            <!-- Imagem em destaque no mobile, logo após a primeira explicação
                 (a versão do desktop, mais abaixo, fica escondida aqui).
                 Mantém a mesma margem lateral do resto do conteúdo da seção
                 (sem sangrar até a borda) e cantos arredondados. -->
            <div class="relative order-3 lg:hidden">
              <div
                class="absolute -inset-10 rounded-full bg-emerald-200/30 blur-3xl"
              ></div>
              <button
                type="button"
                (click)="openLightbox('Dashboard_relatorio.png', 'Dashboard')"
                aria-label="Ampliar imagem do dashboard"
                class="relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 shadow-2xl shadow-slate-900/10"
              >
                <img
                  src="Dashboard_relatorio.png"
                  alt="Dashboard"
                  class="h-auto w-full"
                />
              </button>
            </div>

            <p
              class="order-4 max-w-lg text-base leading-7 text-slate-500 lg:order-none lg:mt-3"
            >
              Do primeiro contato à venda, com automação inteligente e dados em
              tempo real.
            </p>
            <div
              class="order-6 flex flex-col gap-3 sm:flex-row lg:order-none lg:mt-8"
            >
              <a
                href="#contato"
                (click)="scrollTo($event, 'contato')"
                class="inline-flex h-12 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-6 text-sm font-medium text-white shadow-xl shadow-emerald-600/20 transition-colors hover:bg-emerald-700"
              >
                Começar demonstração grátis
                <svg
                  [lucideIcon]="ArrowRight"
                  class="size-4"
                  aria-hidden="true"
                ></svg>
              </a>
              <a
                href="#recursos"
                (click)="scrollTo($event, 'recursos')"
                class="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 px-6 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Conhecer recursos
              </a>
            </div>
          </div>

          <!-- Placeholder de imagem (desktop) - REMOVIDO: aspect-[4/3] para div ser o tamanho correto da imagem -->
          <!-- No mobile essa versão fica escondida: a imagem já aparece mais
               acima, reordenada junto ao texto (ver bloco "order-3"). -->
          <div class="relative hidden w-full lg:block lg:mx-0 lg:ml-auto">
            <div
              class="absolute -inset-10 rounded-full bg-emerald-200/30 blur-3xl"
            ></div>
            <button
              type="button"
              (click)="openLightbox('Dashboard_relatorio.png', 'Dashboard')"
              aria-label="Ampliar imagem do dashboard"
              class="relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 shadow-2xl shadow-slate-900/10"
            >
              <img
                src="Dashboard_relatorio.png"
                alt="Dashboard"
                class="h-auto w-full"
              />
            </button>
          </div>
        </div>
      </section>

      <!-- Social proof bar -->
      <section class="border-y border-slate-100 bg-white py-10">
        <div
          class="mx-auto grid max-w-5xl grid-cols-2 items-center justify-items-center gap-x-4 gap-y-6 px-5 text-center text-sm font-semibold text-slate-400 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-5"
        >
          <span class="flex items-center gap-2">
            <svg
              [lucideIcon]="ShieldCheck"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></svg>
            Comunicação oficial
          </span>
          <span class="flex items-center gap-2">
            <svg
              [lucideIcon]="Rocket"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></svg>
            Feito para crescer
          </span>
          <span class="flex items-center gap-2">
            <svg
              [lucideIcon]="BarChart3"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></svg>
            Dados em tempo real
          </span>
          <span class="flex items-center gap-2">
            <svg
              [lucideIcon]="Headphones"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></svg>
            Equipe conectada
          </span>
        </div>
      </section>

      <!-- How it works (faixa diferenciada + passos interativos) -->
      <section
        class="border-y border-slate-200/70 bg-slate-50 py-20 lg:py-28"
        id="como-funciona"
      >
        <div class="mx-auto max-w-7xl px-5 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <p
              class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600"
            >
              Como funciona
            </p>
            <h2
              class="text-[clamp(1.875rem,1.6rem+1vw,2.25rem)] font-bold tracking-tight text-slate-950"
            >
              Converse. Automatize. Cresça.
            </h2>
            <p class="mt-4 text-base leading-7 text-slate-500">
              Clique em cada passo para ver como o ContatoZap funciona na
              prática.
            </p>
          </div>

          <!-- Seletor de passos (desktop: grid + painel de detalhe abaixo) -->
          <div class="mt-16 hidden gap-4 md:grid md:grid-cols-4">
            @for (step of steps; track step.number; let i = $index) {
              <button
                type="button"
                (click)="selectStep(i)"
                [attr.aria-pressed]="selectedStep === i"
                class="flex flex-col rounded-2xl border p-5 text-left transition-all"
                [class]="
                  selectedStep === i
                    ? 'border-emerald-500 bg-white shadow-xl shadow-emerald-900/10'
                    : 'border-slate-200 bg-white/60 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white'
                "
              >
                <div class="flex items-center justify-between">
                  <span
                    class="text-sm font-bold"
                    [class]="
                      selectedStep === i ? 'text-emerald-600' : 'text-slate-400'
                    "
                    >{{ step.number }}</span
                  >
                  <div
                    class="flex size-10 items-center justify-center rounded-xl transition-colors"
                    [class]="
                      selectedStep === i
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-700'
                    "
                  >
                    <svg
                      [lucideIcon]="step.icon"
                      class="size-5"
                      aria-hidden="true"
                    ></svg>
                  </div>
                </div>
                <h3 class="mt-4 text-lg font-semibold text-slate-950">
                  {{ step.title }}
                </h3>
                <p class="mt-2 text-sm leading-6 text-slate-500">
                  {{ step.description }}
                </p>
              </button>
            }
          </div>

          <!-- Painel de detalhe do passo selecionado (desktop) -->
          <div
            class="mt-8 hidden items-center gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid lg:grid-cols-2 lg:p-10"
          >
            @for (s of [selectedStep]; track s) {
              <div class="animate-step-in">
                <span
                  class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"
                >
                  Passo {{ currentStep.number }}
                </span>
                <h3
                  class="mt-4 text-2xl font-bold tracking-tight text-slate-950"
                >
                  {{ currentStep.detailTitle }}
                </h3>
                <p class="mt-3 text-base leading-7 text-slate-500">
                  {{ currentStep.detailText }}
                </p>
                <ul class="mt-6 flex flex-col gap-3">
                  @for (highlight of currentStep.highlights; track highlight) {
                    <li class="flex items-start gap-2 text-sm text-slate-600">
                      <svg
                        [lucideIcon]="Check"
                        class="mt-0.5 size-4 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      ></svg>
                      {{ highlight }}
                    </li>
                  }
                </ul>
              </div>

              <!-- Placeholder da imagem (ex.: canvas de fluxo) -->
              <div class="relative animate-step-in">
                <div
                  class="absolute -inset-6 rounded-full bg-emerald-200/20 blur-3xl"
                ></div>
                <button
                  type="button"
                  (click)="
                    openLightbox(currentStep.image, currentStep.imageLabel)
                  "
                  [attr.aria-label]="
                    'Ampliar imagem: ' + currentStep.imageLabel
                  "
                  class="relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50"
                >
                  <img
                    [src]="currentStep.image"
                    [alt]="currentStep.imageLabel"
                    class="h-auto w-full"
                  />
                </button>
              </div>
            }
          </div>

          <!-- Passos em acordeão (mobile): toque expande/recolhe cada passo -->
          <div class="mt-16 flex flex-col gap-3 md:hidden">
            @for (step of steps; track step.number; let i = $index) {
              <div
                class="overflow-hidden rounded-2xl border transition-colors"
                [class]="
                  mobileExpandedStep === i
                    ? 'border-emerald-500 bg-white shadow-xl shadow-emerald-900/10'
                    : 'border-slate-200 bg-white/60'
                "
              >
                <button
                  type="button"
                  (click)="toggleMobileStep(i)"
                  [attr.aria-expanded]="mobileExpandedStep === i"
                  class="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div
                    class="flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors"
                    [class]="
                      mobileExpandedStep === i
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-700'
                    "
                  >
                    <svg
                      [lucideIcon]="step.icon"
                      class="size-5"
                      aria-hidden="true"
                    ></svg>
                  </div>
                  <div class="flex-1">
                    <span
                      class="text-xs font-bold"
                      [class]="
                        mobileExpandedStep === i
                          ? 'text-emerald-600'
                          : 'text-slate-400'
                      "
                      >Passo {{ step.number }}</span
                    >
                    <h3 class="text-base font-semibold text-slate-950">
                      {{ step.title }}
                    </h3>
                  </div>
                  <svg
                    [lucideIcon]="ChevronDown"
                    class="size-5 shrink-0 text-slate-400 transition-transform"
                    [class.rotate-180]="mobileExpandedStep === i"
                    aria-hidden="true"
                  ></svg>
                </button>

                @if (mobileExpandedStep === i) {
                  <div class="animate-step-in border-t border-slate-100">
                    <div class="p-5 pt-4">
                      <p class="text-sm leading-6 text-slate-500">
                        {{ step.detailText }}
                      </p>
                      <ul class="mt-4 flex flex-col gap-2.5">
                        @for (highlight of step.highlights; track highlight) {
                          <li
                            class="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <svg
                              [lucideIcon]="Check"
                              class="mt-0.5 size-4 shrink-0 text-emerald-600"
                              aria-hidden="true"
                            ></svg>
                            {{ highlight }}
                          </li>
                        }
                      </ul>
                    </div>
                    <!-- Imagem sangra até a borda do card (sem padding lateral) -->
                    <button
                      type="button"
                      (click)="openLightbox(step.image, step.imageLabel)"
                      [attr.aria-label]="'Ampliar imagem: ' + step.imageLabel"
                      class="block w-full cursor-zoom-in border-t border-slate-100"
                    >
                      <img
                        [src]="step.image"
                        [alt]="step.imageLabel"
                        class="w-full"
                      />
                    </button>
                  </div>
                }
              </div>
            }
          </div>

          <!-- Selos de confiança -->
          <div
            class="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-3 lg:p-8"
          >
            @for (card of trustCards; track card.title) {
              <div class="flex gap-3">
                <svg
                  [lucideIcon]="card.icon"
                  class="size-5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                ></svg>
                <div>
                  <h4 class="font-semibold text-slate-950">{{ card.title }}</h4>
                  <p class="mt-1 text-xs leading-5 text-slate-500">
                    {{ card.description }}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Features -->
      <section
        class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
        id="recursos"
      >
        <div class="mx-auto max-w-2xl text-center">
          <p
            class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600"
          >
            Tudo conectado
          </p>
          <h2
            class="text-[clamp(1.875rem,1.6rem+1vw,2.25rem)] font-bold tracking-tight text-slate-950"
          >
            Uma operação completa para cada conversa
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-500">
            Do primeiro oi ao pós-venda, o ContatoZap reúne as ferramentas que
            sua equipe precisa para atender melhor e vender mais.
          </p>
        </div>

        <!-- Atendimento (emerald) -->
        <div class="mt-16 @container">
          <div class="mb-8 flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
            >
              <svg
                [lucideIcon]="MessageCircle"
                class="size-5"
                aria-hidden="true"
              ></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-950">Atendimento</h3>
              <p class="text-sm text-slate-500">
                Organize sua operação e nunca perca uma oportunidade.
              </p>
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-4 @sm:grid-cols-2 @4xl:grid-cols-3 @6xl:grid-cols-5"
          >
            @for (item of atendimento; track item.title) {
              <article
                class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div
                  class="mb-5 flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white"
                >
                  <svg
                    [lucideIcon]="item.icon"
                    class="size-5"
                    aria-hidden="true"
                  ></svg>
                </div>
                <h3 class="font-semibold text-slate-950">{{ item.title }}</h3>
                <p class="mt-2 text-sm leading-6 text-slate-500">
                  {{ item.description }}
                </p>
              </article>
            }
          </div>
        </div>

        <!-- Automação & IA (teal) -->
        <div class="mt-20 @container">
          <div class="mb-8 flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700"
            >
              <svg
                [lucideIcon]="Sparkles"
                class="size-5"
                aria-hidden="true"
              ></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-950">
                Automação &amp; IA
              </h3>
              <p class="text-sm text-slate-500">
                Mais inteligência para sua equipe, mais agilidade para seus
                clientes.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 @sm:grid-cols-2 @5xl:grid-cols-4">
            @for (item of automacao; track item.title) {
              <article
                class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5"
              >
                <div
                  class="mb-5 flex size-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white"
                >
                  <svg
                    [lucideIcon]="item.icon"
                    class="size-5"
                    aria-hidden="true"
                  ></svg>
                </div>
                <h3 class="font-semibold text-slate-950">{{ item.title }}</h3>
                <p class="mt-2 text-sm leading-6 text-slate-500">
                  {{ item.description }}
                </p>
              </article>
            }
          </div>
        </div>

        <div class="mt-20 grid gap-12 lg:grid-cols-2">
          <!-- Comunicação Oficial (sky) -->
          <div class="@container">
            <div class="mb-8 flex items-center gap-3">
              <div
                class="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700"
              >
                <svg
                  [lucideIcon]="Send"
                  class="size-5"
                  aria-hidden="true"
                ></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-950">
                  Comunicação Oficial
                </h3>
                <p class="text-sm text-slate-500">
                  Alcance seus contatos com segurança e escala.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 @sm:grid-cols-2">
              @for (item of comunicacao; track item.title) {
                <article
                  class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5"
                >
                  <div
                    class="mb-5 flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors group-hover:bg-sky-600 group-hover:text-white"
                  >
                    <svg
                      [lucideIcon]="item.icon"
                      class="size-5"
                      aria-hidden="true"
                    ></svg>
                  </div>
                  <h3 class="font-semibold text-slate-950">{{ item.title }}</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-500">
                    {{ item.description }}
                  </p>
                </article>
              }
            </div>
          </div>

          <!-- Gestão (violet) -->
          <div class="@container">
            <div class="mb-8 flex items-center gap-3">
              <div
                class="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"
              >
                <svg
                  [lucideIcon]="PanelTop"
                  class="size-5"
                  aria-hidden="true"
                ></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-950">Gestão</h3>
                <p class="text-sm text-slate-500">
                  Visibilidade para tomar decisões melhores.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 @sm:grid-cols-2">
              @for (item of gestao; track item.title) {
                <article
                  class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/5"
                >
                  <div
                    class="mb-5 flex size-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-600 group-hover:text-white"
                  >
                    <svg
                      [lucideIcon]="item.icon"
                      class="size-5"
                      aria-hidden="true"
                    ></svg>
                  </div>
                  <h3 class="font-semibold text-slate-950">{{ item.title }}</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-500">
                    {{ item.description }}
                  </p>
                </article>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-emerald-50/60 px-5 py-20 lg:py-24" id="contato">
        <div
          class="mx-auto max-w-4xl rounded-3xl bg-emerald-600 px-6 py-12 text-center text-white shadow-2xl shadow-emerald-900/15 md:px-12"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100"
          >
            Pronto para transformar seu atendimento?
          </p>
          <h2
            class="mx-auto mt-4 max-w-2xl text-[clamp(1.875rem,1.6rem+1vw,2.25rem)] font-bold tracking-tight"
          >
            Toda conversa pode ser o começo de uma grande oportunidade.
          </h2>
          <p class="mx-auto mt-4 max-w-xl leading-7 text-emerald-50">
            Conheça o ContatoZap e descubra como sua equipe pode atender melhor,
            automatizar mais e crescer com segurança.
          </p>
          <a
            href="https://wa.me/551833048322?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20ContatoZap"
            target="_blank"
            class="mt-8 inline-flex h-12 items-center justify-center gap-1.5 rounded-lg bg-white px-7 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-50"
          >
            Falar com um Consultor pelo WhatsApp
            <svg
              [lucideIcon]="ArrowRight"
              class="size-4"
              aria-hidden="true"
            ></svg>
          </a>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mx-auto max-w-3xl px-5 py-20 lg:py-28" id="faq">
        <div class="mx-auto max-w-2xl text-center">
          <p
            class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600"
          >
            Perguntas frequentes
          </p>
          <h2
            class="text-[clamp(1.875rem,1.6rem+1vw,2.25rem)] font-bold tracking-tight text-slate-950"
          >
            Ainda ficou alguma dúvida?
          </h2>
        </div>
        <div class="mt-12 flex flex-col gap-3">
          @for (faq of faqs; track faq.question) {
            <details class="group rounded-xl border border-slate-200 px-5">
              <summary
                class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-slate-900"
              >
                <span>{{ faq.question }}</span>
                <svg
                  [lucideIcon]="ChevronDown"
                  class="size-5 shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                ></svg>
              </summary>
              <p class="pb-5 text-sm leading-6 text-slate-500">
                {{ faq.answer }}
              </p>
            </details>
          }
        </div>
      </section>

      <!-- footer -->
      <footer class="border-t border-slate-200 bg-slate-50">
        <div
          class="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:px-8 md:grid-cols-[1.6fr_1fr_1fr]"
        >
          <!-- Marca -->
          <div>
            <div
              class="flex items-center gap-2 text-lg font-bold text-slate-950"
            >
              <span
                class="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white"
              >
                <svg
                  [lucideIcon]="MessageCircle"
                  class="size-4"
                  aria-hidden="true"
                ></svg>
              </span>
              <span>Contato<span class="text-emerald-600">Zap</span></span>
            </div>
            <p class="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Atendimento que transforma conversas em crescimento. Centralize,
              automatize e escale com a API Oficial da Meta.
            </p>

            <!-- Selos: desenvolvido por + certificação Meta -->
            <div class="mt-6 flex flex-wrap items-start gap-x-10 gap-y-5">
              <div>
                <p class="text-xs text-slate-400">
                  Um produto desenvolvido pela
                </p>
                <a
                  href="https://projetaideais.com.br/"
                  target="_blank"
                  rel="noopener"
                  class="mt-2 inline-flex opacity-90 transition-opacity hover:opacity-100"
                  aria-label="Projeta Ideais Tecnologia"
                >
                  <img
                    src="LogoProjeta.png"
                    alt="Projeta Ideais Tecnologia"
                    class="h-12 w-auto"
                  />
                </a>
              </div>
              <div>
                <p class="text-xs text-slate-400">
                  Uma empresa certificada pela Meta
                </p>
                <img
                  src="MetaBusinessPartner.png"
                  alt="Meta Business Partner"
                  class="mt-2 h-12 w-auto"
                />
              </div>
            </div>
          </div>

          <!-- Navegação -->
          <div>
            <h4
              class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
            >
              Navegação
            </h4>
            <nav
              class="mt-4 flex flex-col gap-3 text-sm text-slate-500"
              aria-label="Links do rodapé"
            >
              <a
                href="#inicio"
                (click)="scrollTo($event, 'inicio')"
                class="flex min-h-11 items-center py-1 transition-colors hover:text-emerald-700"
                >Início</a
              >
              <a
                href="#como-funciona"
                (click)="scrollTo($event, 'como-funciona')"
                class="flex min-h-11 items-center py-1 transition-colors hover:text-emerald-700"
                >Como funciona</a
              >
              <a
                href="#recursos"
                (click)="scrollTo($event, 'recursos')"
                class="flex min-h-11 items-center py-1 transition-colors hover:text-emerald-700"
                >Recursos</a
              >
              <a
                href="#faq"
                (click)="scrollTo($event, 'faq')"
                class="flex min-h-11 items-center py-1 transition-colors hover:text-emerald-700"
                >Dúvidas</a
              >
            </nav>
          </div>

          <!-- Contato -->
          <div>
            <h4
              class="text-xs font-bold uppercase tracking-[0.15em] text-slate-400"
            >
              Contato
            </h4>
            <nav class="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a
                href="#contato"
                (click)="scrollTo($event, 'contato')"
                class="flex min-h-11 items-center py-1 font-bold transition-colors hover:text-emerald-700"
                >Falar com especialista</a
              >
              <a
                href="#contato"
                (click)="scrollTo($event, 'contato')"
                class="flex min-h-11 items-center py-1 font-bold transition-colors hover:text-emerald-700"
                >(18) 3304-8322 (WhatsApp)</a
              >
            </nav>
          </div>
        </div>

        <!-- Barra inferior: copyright -->
        <div class="border-t border-slate-200">
          <div class="mx-auto max-w-7xl px-5 py-6 text-center lg:px-8">
            <p class="text-xs text-slate-400">
              © {{ foundedYear
              }}{{ currentYear > foundedYear ? ' – ' + currentYear : '' }}
              ContatoZap. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <!-- Balão flutuante de WhatsApp: fixo no canto inferior direito,
           visível em qualquer ponto da página (mobile e desktop). -->
      <a
        href="https://wa.me/551833048322?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20ContatoZap"
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
        class="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-900/30 transition-transform hover:scale-105 hover:bg-emerald-700 lg:bottom-8 lg:right-8"
      >
        <span
          class="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/60"
          aria-hidden="true"
        ></span>
        <svg
          [lucideIcon]="MessageCircle"
          class="size-7"
          aria-hidden="true"
        ></svg>
      </a>

      <!-- Lightbox: no mobile abre já com zoom (altura ajustável por botões,
           largura livre), rolando só para os lados, colado na borda da tela.
           No desktop (lg:) mostra a imagem inteira, sem precisar rolar.
           Clique fora ou no X fecha. -->
      @if (lightboxImage) {
        <div
          class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 py-4 backdrop-blur-sm lg:p-4"
          (click)="closeLightbox()"
        >
          <button
            type="button"
            (click)="closeLightbox()"
            aria-label="Fechar"
            class="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg [lucideIcon]="X" class="size-6" aria-hidden="true"></svg>
          </button>

          <!-- Mobile: zoom dinâmico (altura controlada por lightboxZoomPercent) -->
          <div
            class="w-full overflow-x-auto overflow-y-hidden lg:hidden"
            (click)="$event.stopPropagation()"
          >
            <img
              [src]="lightboxImage"
              [alt]="lightboxLabel"
              [style.height.vh]="70 * (lightboxZoomPercent / 100)"
              class="w-auto max-w-none"
            />
          </div>

          <!-- Desktop: imagem inteira, sem zoom -->
          <img
            [src]="lightboxImage"
            [alt]="lightboxLabel"
            (click)="$event.stopPropagation()"
            class="hidden max-h-[88vh] max-w-[92vw] rounded-lg object-contain lg:block"
          />

          <div
            class="fixed bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-2 py-2 text-white backdrop-blur-sm lg:hidden"
            (click)="$event.stopPropagation()"
          >
            <button
              type="button"
              (click)="zoomOut()"
              aria-label="Diminuir zoom"
              class="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/20"
            >
              <svg [lucideIcon]="Minus" class="size-5" aria-hidden="true"></svg>
            </button>
            <span class="w-12 text-center text-sm font-medium tabular-nums">
              {{ lightboxZoomPercent }}%
            </span>
            <button
              type="button"
              (click)="zoomIn()"
              aria-label="Aumentar zoom"
              class="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/20"
            >
              <svg [lucideIcon]="Plus" class="size-5" aria-hidden="true"></svg>
            </button>
          </div>
        </div>
      }
    </main>
  `,
})
export class LandingComponent {
  // Copyright do rodapé: ano de fundação + ano atual (dinâmico)
  readonly foundedYear = 2026;
  readonly currentYear = new Date().getFullYear();

  // Passo selecionado na section "Como funciona"
  selectedStep = 0;

  selectStep(index: number): void {
    this.selectedStep = index;
  }

  // Lightbox de imagens. No mobile abre com zoom dinâmico (lightboxZoomPercent,
  // 100% = zoom padrão já bom); no desktop mostra a imagem inteira sem zoom.
  lightboxImage: string | null = null;
  lightboxLabel = '';
  lightboxZoomPercent = 100;

  openLightbox(src: string, label: string): void {
    this.lightboxImage = src;
    this.lightboxLabel = label;
    this.lightboxZoomPercent = 100;
    // Trava o scroll da página por trás enquanto o lightbox está aberto.
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxImage = null;
    document.body.style.overflow = '';
  }

  zoomIn(): void {
    this.lightboxZoomPercent = Math.min(this.lightboxZoomPercent + 25, 200);
  }

  zoomOut(): void {
    this.lightboxZoomPercent = Math.max(this.lightboxZoomPercent - 25, 50);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeLightbox();
  }

  // Passo expandido no acordeão mobile de "Como funciona" (null = nenhum aberto)
  mobileExpandedStep: number | null = null;

  toggleMobileStep(index: number): void {
    this.mobileExpandedStep = this.mobileExpandedStep === index ? null : index;
  }

  // Menu mobile (hamburger) do header
  mobileMenuOpen = false;

  // Navegação por âncora sem recarregar a página (evita que o <base href>
  // resolva o link para fora do subcaminho publicado em produção).
  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  }

  get currentStep(): Step {
    return this.steps[this.selectedStep];
  }

  // Ícones referenciados diretamente no template
  readonly ArrowRight = LucideArrowRight;
  readonly BadgeCheck = LucideBadgeCheck;
  readonly BarChart3 = LucideChartColumn;
  readonly Check = LucideCheck;
  readonly ChevronDown = LucideChevronDown;
  readonly Headphones = LucideHeadphones;
  readonly ImageIcon = LucideImageIcon;
  readonly Lock = LucideLock;
  readonly Menu = LucideMenu;
  readonly MessageCircle = LucideMessageCircle;
  readonly Minus = LucideMinus;
  readonly PanelTop = LucidePanelTop;
  readonly Plus = LucidePlus;
  readonly Rocket = LucideRocket;
  readonly Send = LucideSend;
  readonly ShieldCheck = LucideShieldCheck;
  readonly Sparkles = LucideSparkles;
  readonly X = LucideX;
  readonly Zap = LucideZap;

  readonly atendimento: Feature[] = [
    {
      icon: LucideSquareKanban,
      title: 'Kanban de Atendimento',
      description:
        'Visualize e gerencie leads e oportunidades do primeiro contato até o fechamento.',
    },
    {
      icon: LucideRadio,
      title: 'Canais',
      description:
        'Configure as conexões de WhatsApp e os números de atendimento da sua empresa.',
    },
    {
      icon: LucideNetwork,
      title: 'Setores',
      description:
        'Direcione cada conversa para o setor, fila ou departamento certo.',
    },
    {
      icon: LucideUsers,
      title: 'Agentes de Atendimento',
      description:
        'Gerencie permissões e níveis de acesso de toda a sua equipe.',
    },
    {
      icon: LucideTags,
      title: 'Etiquetas',
      description:
        'Classifique chats e contatos para agilizar a triagem e o acompanhamento.',
    },
  ];

  readonly automacao: Feature[] = [
    {
      icon: LucideWorkflow,
      title: 'Fluxo IA',
      description:
        'Desenhe automações e conversas inteligentes de forma visual e simples.',
    },
    {
      icon: LucideBot,
      title: 'Inteligência Artificial',
      description:
        'Responda automaticamente fora do horário ou após um tempo de espera definido.',
    },
    {
      icon: LucideBrainCircuit,
      title: 'Base de Conhecimento (RAG)',
      description:
        'Alimente a IA com documentos para respostas precisas e contextualizadas.',
    },
    {
      icon: LucideClock3,
      title: 'Horários e Ausência',
      description:
        'Mantenha o atendimento ativo mesmo quando sua equipe estiver fora do expediente.',
    },
  ];

  readonly comunicacao: Feature[] = [
    {
      icon: LucideMegaphone,
      title: 'Campanhas de Transmissão',
      description:
        'Dispare campanhas em massa com templates oficiais aprovados pela Meta.',
    },
    {
      icon: LucideFileText,
      title: 'Modelos Meta',
      description:
        'Gerencie mensagens pré-aprovadas, prontas para campanhas e automações.',
    },
  ];

  readonly gestao: Feature[] = [
    {
      icon: LucideChartColumn,
      title: 'Relatórios',
      description:
        'Acompanhe comunicação, uso e gastos em tempo real, incluindo taxas da Meta.',
    },
    {
      icon: LucideMessagesSquare,
      title: 'Chat Interno',
      description:
        'Comunique sua equipe em grupos ou conversas diretas, independente do WhatsApp.',
    },
  ];

  readonly steps: Step[] = [
    {
      icon: LucideCodeXml,
      number: '01',
      title: 'Conecte',
      description:
        'Use a API Oficial da Meta e reúna seus canais em um só lugar.',
      detailTitle: 'Conecte seus canais com a API Oficial',
      detailText:
        'Integre os números de WhatsApp da sua empresa usando a API Oficial da Meta e centralize todas as conversas em um só painel, sem depender de aplicativos não oficiais.',
      highlights: [
        'Conexão via API Oficial da Meta',
        'Vários números em um só lugar',
        'Configuração guiada, sem complicação',
      ],
      imageLabel: 'Tela de conexão de canais',
      image: 'ConectarAPI.png',
    },
    {
      icon: LucideWorkflow,
      number: '02',
      title: 'Automatize',
      description: 'Crie fluxos inteligentes que trabalham pela sua equipe.',
      detailTitle: 'Crie fluxos inteligentes no canvas visual',
      detailText:
        'Monte automações arrastando e conectando blocos no canvas de fluxo. Defina respostas automáticas, encaminhamentos e integrações com IA sem escrever uma linha de código.',
      highlights: [
        'Editor de fluxo arrastar-e-soltar',
        'Respostas com Inteligência Artificial',
        'Gatilhos por horário, palavra-chave e etiqueta',
      ],
      imageLabel: 'Canvas de fluxo (arraste e conecte)',
      image: 'Fluxo_IA.png',
    },
    {
      icon: LucideSettings2,
      number: '03',
      title: 'Gerencie',
      description:
        'Distribua conversas, acompanhe métricas e mantenha o controle.',
      detailTitle: 'Distribua e acompanhe cada atendimento',
      detailText:
        'Direcione conversas para os setores e agentes certos, acompanhe filas em tempo real e mantenha o controle total da operação pelo Kanban.',
      highlights: [
        'Kanban de atendimento por etapa',
        'Setores, filas e permissões',
        'Métricas de desempenho em tempo real',
      ],
      imageLabel: 'Gestão de equipe',
      image: 'EquipeAgentes.png',
    },
    {
      icon: LucideRocket,
      number: '04',
      title: 'Cresça',
      description:
        'Transforme atendimentos mais rápidos em clientes mais satisfeitos.',
      detailTitle: 'Escale com dados e decisões melhores',
      detailText:
        'Use relatórios em tempo real para entender gargalos, medir resultados e transformar atendimentos mais rápidos em clientes mais satisfeitos.',
      highlights: [
        'Relatórios e indicadores completos',
        'Campanhas de transmissão em massa',
        'Base pronta para escalar sem perder qualidade',
      ],
      imageLabel: 'Relatórios e indicadores',
      image: 'FeedbackAtendentes.png',
    },
  ];

  readonly trustCards: TrustCard[] = [
    {
      icon: LucideShieldCheck,
      title: 'API Oficial Meta',
      description: 'Comunicação dentro das políticas oficiais.',
    },
    {
      icon: LucideLock,
      title: 'Segurança por padrão',
      description: 'Controle de acesso e dados protegidos.',
    },
    {
      icon: LucideZap,
      title: 'Escala sem complicação',
      description: 'Sua operação cresce sem perder o ritmo.',
    },
  ];

  readonly faqs: Faq[] = [
    {
      question: 'O ContatoZap usa a API Oficial do WhatsApp?',
      answer:
        'Sim. O ContatoZap utiliza a API Oficial da Meta para garantir comunicação segura, estável e escalável para sua empresa.',
    },
    {
      question: 'Posso conectar mais de um número?',
      answer:
        'Sim. Você pode centralizar diferentes canais e números de atendimento, de acordo com o plano escolhido.',
    },
    {
      question: 'A IA responde fora do horário comercial?',
      answer:
        'Você define os horários e as regras. A IA pode responder automaticamente, consultar sua base de conhecimento e encaminhar a conversa quando necessário.',
    },
    {
      question: 'Minha equipe consegue conversar internamente?',
      answer:
        'Sim. O chat interno é independente do WhatsApp e permite conversas diretas e grupos exclusivos da empresa.',
    },
  ];
}
