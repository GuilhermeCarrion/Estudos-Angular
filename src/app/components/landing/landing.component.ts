import { Component } from '@angular/core';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  FileText,
  Headphones,
  Image as ImageIcon,
  KanbanSquare,
  Lock,
  LucideAngularModule,
  LucideIconData,
  Megaphone,
  Menu,
  MessageCircle,
  MessagesSquare,
  Network,
  PanelTop,
  Radio,
  Rocket,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Tags,
  Users,
  Workflow,
  Zap,
} from 'lucide-angular';

interface Feature {
  icon: LucideIconData;
  title: string;
  description: string;
}

interface Step {
  icon: LucideIconData;
  number: string;
  title: string;
  description: string;
  detailTitle: string;
  detailText: string;
  highlights: string[];
  imageLabel: string;
}

interface TrustCard {
  icon: LucideIconData;
  title: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-landing',
  imports: [LucideAngularModule],
  template: `
    <main class="min-h-screen bg-white text-slate-900" id="inicio">
      <!-- header -->
      <header
        class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl"
      >
        <div
          class="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8"
        >
          <a
            href="#inicio"
            class="flex items-center gap-2.5"
            aria-label="ContatoZap início"
          >
            <span
              class="flex size-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
            >
              <lucide-icon
                [img]="MessageCircle"
                class="size-5"
                aria-hidden="true"
              ></lucide-icon>
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
              class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700"
              >Como funciona</a
            >
            <a
              href="#recursos"
              class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700"
              >Recursos</a
            >
            <!-- <a href="#planos" class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700">Planos</a> -->
            <a
              href="#faq"
              class="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700"
              >Dúvidas</a
            >
          </nav>

          <div class="hidden items-center gap-3 md:flex">
            <a
              href="#contato"
              class="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 text-sm font-medium text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700"
            >
              Começar agora
              <lucide-icon
                [img]="ArrowRight"
                class="size-4"
                aria-hidden="true"
              ></lucide-icon>
            </a>
          </div>

          <button
            type="button"
            class="inline-flex size-9 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Abrir menu"
          >
            <lucide-icon
              [img]="Menu"
              class="size-5"
              aria-hidden="true"
            ></lucide-icon>
          </button>
        </div>
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
          <div class="relative">
            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
            >
              <span class="size-1.5 rounded-full bg-emerald-500"></span
              >Atendimento inteligente para empresas
            </div>
            <h1
              class="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 md:text-6xl"
            >
              Todo atendimento.
              <span class="text-emerald-600">Um só lugar.</span>
            </h1>
            <p class="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Centralize o atendimento via WhatsApp da sua empresa com a API
              Oficial da Meta — seguro, estável e pronto para escalar.
            </p>
            <p class="mt-3 max-w-lg text-base leading-7 text-slate-500">
              Do primeiro contato à venda, com automação inteligente e dados em
              tempo real.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                class="inline-flex h-12 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-6 text-sm font-medium text-white shadow-xl shadow-emerald-600/20 transition-colors hover:bg-emerald-700"
              >
                Começar demonstração grátis
                <lucide-icon
                  [img]="ArrowRight"
                  class="size-4"
                  aria-hidden="true"
                ></lucide-icon>
              </a>
              <a
                href="#recursos"
                class="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 px-6 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Conhecer recursos
              </a>
            </div>
            <div
              class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500"
            >
              <span class="flex items-center gap-1.5">
                <lucide-icon
                  [img]="ShieldCheck"
                  class="size-4 text-emerald-600"
                  aria-hidden="true"
                ></lucide-icon>
                API Oficial Meta
              </span>
              <span class="flex items-center gap-1.5">
                <lucide-icon
                  [img]="Lock"
                  class="size-4 text-emerald-600"
                  aria-hidden="true"
                ></lucide-icon>
                Dados protegidos
              </span>
              <span class="flex items-center gap-1.5">
                <lucide-icon
                  [img]="Zap"
                  class="size-4 text-emerald-600"
                  aria-hidden="true"
                ></lucide-icon>
                Escalável
              </span>
            </div>
          </div>

          <!-- Placeholder de imagem (substituir futuramente por uma imagem real) -->
          <div class="relative mx-auto w-full max-w-2xl lg:mx-0 lg:ml-auto">
            <div
              class="absolute -inset-10 rounded-full bg-emerald-200/30 blur-3xl"
            ></div>
            <div
              class="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 shadow-2xl shadow-slate-900/10"
            >
              <div class="flex flex-col items-center gap-3 text-slate-400">
                <lucide-icon
                  [img]="ImageIcon"
                  class="size-12"
                  aria-hidden="true"
                ></lucide-icon>
                <span class="text-sm font-medium">Imagem em breve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Social proof bar -->
      <section class="border-y border-slate-100 bg-white py-10">
        <div
          class="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-5 text-center text-sm font-semibold text-slate-400"
        >
          <span class="flex items-center gap-2">
            <lucide-icon
              [img]="ShieldCheck"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></lucide-icon>
            Comunicação oficial
          </span>
          <span class="flex items-center gap-2">
            <lucide-icon
              [img]="Rocket"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></lucide-icon>
            Feito para crescer
          </span>
          <span class="flex items-center gap-2">
            <lucide-icon
              [img]="BarChart3"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></lucide-icon>
            Dados em tempo real
          </span>
          <span class="flex items-center gap-2">
            <lucide-icon
              [img]="Headphones"
              class="size-5 text-emerald-600"
              aria-hidden="true"
            ></lucide-icon>
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
              class="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl"
            >
              Converse. Automatize. Cresça.
            </h2>
            <p class="mt-4 text-base leading-7 text-slate-500">
              Clique em cada passo para ver como o ContatoZap funciona na
              prática.
            </p>
          </div>

          <!-- Seletor de passos -->
          <div class="mt-16 grid gap-4 md:grid-cols-4">
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
                    <lucide-icon
                      [img]="step.icon"
                      class="size-5"
                      aria-hidden="true"
                    ></lucide-icon>
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

          <!-- Painel de detalhe do passo selecionado -->
          <div
            class="mt-8 grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10"
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
                      <lucide-icon
                        [img]="Check"
                        class="mt-0.5 size-4 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      ></lucide-icon>
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
                <div
                  class="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50"
                >
                  <div class="flex flex-col items-center gap-3 text-slate-400">
                    <lucide-icon
                      [img]="ImageIcon"
                      class="size-12"
                      aria-hidden="true"
                    ></lucide-icon>
                    <span class="text-sm font-medium">{{
                      currentStep.imageLabel
                    }}</span>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Selos de confiança -->
          <div
            class="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-3 lg:p-8"
          >
            @for (card of trustCards; track card.title) {
              <div class="flex gap-3">
                <lucide-icon
                  [img]="card.icon"
                  class="size-5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                ></lucide-icon>
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
            class="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl"
          >
            Uma operação completa para cada conversa
          </h2>
          <p class="mt-4 text-base leading-7 text-slate-500">
            Do primeiro oi ao pós-venda, o ContatoZap reúne as ferramentas que
            sua equipe precisa para atender melhor e vender mais.
          </p>
        </div>

        <!-- Atendimento (emerald) -->
        <div class="mt-16">
          <div class="mb-8 flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"
            >
              <lucide-icon
                [img]="MessageCircle"
                class="size-5"
                aria-hidden="true"
              ></lucide-icon>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-950">Atendimento</h3>
              <p class="text-sm text-slate-500">
                Organize sua operação e nunca perca uma oportunidade.
              </p>
            </div>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            @for (item of atendimento; track item.title) {
              <article
                class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div
                  class="mb-5 flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white"
                >
                  <lucide-icon
                    [img]="item.icon"
                    class="size-5"
                    aria-hidden="true"
                  ></lucide-icon>
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
        <div class="mt-20">
          <div class="mb-8 flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700"
            >
              <lucide-icon
                [img]="Sparkles"
                class="size-5"
                aria-hidden="true"
              ></lucide-icon>
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
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            @for (item of automacao; track item.title) {
              <article
                class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5"
              >
                <div
                  class="mb-5 flex size-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white"
                >
                  <lucide-icon
                    [img]="item.icon"
                    class="size-5"
                    aria-hidden="true"
                  ></lucide-icon>
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
          <div>
            <div class="mb-8 flex items-center gap-3">
              <div
                class="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700"
              >
                <lucide-icon
                  [img]="Send"
                  class="size-5"
                  aria-hidden="true"
                ></lucide-icon>
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
            <div class="grid gap-4 sm:grid-cols-2">
              @for (item of comunicacao; track item.title) {
                <article
                  class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5"
                >
                  <div
                    class="mb-5 flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors group-hover:bg-sky-600 group-hover:text-white"
                  >
                    <lucide-icon
                      [img]="item.icon"
                      class="size-5"
                      aria-hidden="true"
                    ></lucide-icon>
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
          <div>
            <div class="mb-8 flex items-center gap-3">
              <div
                class="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"
              >
                <lucide-icon
                  [img]="PanelTop"
                  class="size-5"
                  aria-hidden="true"
                ></lucide-icon>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-950">Gestão</h3>
                <p class="text-sm text-slate-500">
                  Visibilidade para tomar decisões melhores.
                </p>
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              @for (item of gestao; track item.title) {
                <article
                  class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/5"
                >
                  <div
                    class="mb-5 flex size-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-600 group-hover:text-white"
                  >
                    <lucide-icon
                      [img]="item.icon"
                      class="size-5"
                      aria-hidden="true"
                    ></lucide-icon>
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

      <!-- Planos (desativado - não utilizamos planos por enquanto)
      <section class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28" id="planos">
        <div class="mx-auto max-w-2xl text-center">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Planos flexíveis</p>
          <h2 class="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Comece no seu ritmo</h2>
          <p class="mt-4 text-base leading-7 text-slate-500">
            Escolha o plano que acompanha o momento da sua operação. Ajuste quando precisar.
          </p>
        </div>
        (toggle Mensal/Anual e cards de planos removidos daqui)
      </section>
      -->

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
            class="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
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
            <lucide-icon
              [img]="ArrowRight"
              class="size-4"
              aria-hidden="true"
            ></lucide-icon>
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
            class="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl"
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
                <lucide-icon
                  [img]="ChevronDown"
                  class="size-5 shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                ></lucide-icon>
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
          <div class="max-w-xs">
            <div
              class="flex items-center gap-2 text-lg font-bold text-slate-950"
            >
              <span
                class="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white"
              >
                <lucide-icon
                  [img]="MessageCircle"
                  class="size-4"
                  aria-hidden="true"
                ></lucide-icon>
              </span>
              <span>Contato<span class="text-emerald-600">Zap</span></span>
            </div>
            <p class="mt-3 text-sm leading-6 text-slate-500">
              Atendimento que transforma conversas em crescimento. Centralize,
              automatize e escale com a API Oficial da Meta.
            </p>
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
              <a href="#inicio" class="transition-colors hover:text-emerald-700"
                >Início</a
              >
              <a
                href="#como-funciona"
                class="transition-colors hover:text-emerald-700"
                >Como funciona</a
              >
              <a
                href="#recursos"
                class="transition-colors hover:text-emerald-700"
                >Recursos</a
              >
              <a href="#faq" class="transition-colors hover:text-emerald-700"
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
                class="font-bold transition-colors hover:text-emerald-700"
                >Falar com especialista</a
              >
              <a
                href="#contato"
                class="font-bold transition-colors hover:text-emerald-700"
                >(18) 3304-8322 (WhatsApp)</a
              >
            </nav>
          </div>
        </div>

        <!-- Barra inferior: copyright + desenvolvido por -->
        <div class="border-t border-slate-200">
          <div
            class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-6 lg:px-8 sm:flex-row sm:justify-between"
          >
            <p class="text-xs text-slate-400">
              © {{ foundedYear
              }}{{ currentYear > foundedYear ? ' – ' + currentYear : '' }}
              ContatoZap. Todos os direitos reservados.
            </p>

            <!-- Um produto desenvolvido pela EMPRESA XYZ
                 (para tornar clicável, envolva em <a href="https://..."> ) -->
            <div
              class="flex items-center gap-2 text-xs text-slate-500"
              aria-label="Um produto desenvolvido pela EMPRESA XYZ"
            >
              <span>Um produto desenvolvido pela</span>
              <span
                class="flex items-center gap-1.5 font-semibold text-slate-700"
              >
                <!-- logo pequena (placeholder — troque pela logo real:
                     <img src="/logo-empresa.png" alt="EMPRESA XYZ" class="size-6 rounded-md" /> ) -->
                <span
                  class="flex size-6 items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-white text-slate-400"
                >
                  <lucide-icon
                    [img]="ImageIcon"
                    class="size-3.5"
                    aria-hidden="true"
                  ></lucide-icon>
                </span>
                <a href="https://projetaideais.com.br/" target="_blank"
                  >Projeta Ideais Tecnologia</a
                >
              </span>
            </div>
          </div>
        </div>
      </footer>
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

  get currentStep(): Step {
    return this.steps[this.selectedStep];
  }

  // Ícones referenciados diretamente no template
  readonly ArrowRight = ArrowRight;
  readonly BarChart3 = BarChart3;
  readonly Check = Check;
  readonly ChevronDown = ChevronDown;
  readonly Headphones = Headphones;
  readonly ImageIcon = ImageIcon;
  readonly Lock = Lock;
  readonly Menu = Menu;
  readonly MessageCircle = MessageCircle;
  readonly PanelTop = PanelTop;
  readonly Rocket = Rocket;
  readonly Send = Send;
  readonly ShieldCheck = ShieldCheck;
  readonly Sparkles = Sparkles;
  readonly Zap = Zap;

  readonly atendimento: Feature[] = [
    {
      icon: KanbanSquare,
      title: 'Kanban de Atendimento',
      description:
        'Visualize e gerencie leads e oportunidades do primeiro contato até o fechamento.',
    },
    {
      icon: Radio,
      title: 'Canais',
      description:
        'Configure as conexões de WhatsApp e os números de atendimento da sua empresa.',
    },
    {
      icon: Network,
      title: 'Setores',
      description:
        'Direcione cada conversa para o setor, fila ou departamento certo.',
    },
    {
      icon: Users,
      title: 'Agentes de Atendimento',
      description:
        'Gerencie permissões e níveis de acesso de toda a sua equipe.',
    },
    {
      icon: Tags,
      title: 'Etiquetas',
      description:
        'Classifique chats e contatos para agilizar a triagem e o acompanhamento.',
    },
  ];

  readonly automacao: Feature[] = [
    {
      icon: Workflow,
      title: 'Fluxo IA',
      description:
        'Desenhe automações e conversas inteligentes de forma visual e simples.',
    },
    {
      icon: Bot,
      title: 'Inteligência Artificial',
      description:
        'Responda automaticamente fora do horário ou após um tempo de espera definido.',
    },
    {
      icon: BrainCircuit,
      title: 'Base de Conhecimento (RAG)',
      description:
        'Alimente a IA com documentos para respostas precisas e contextualizadas.',
    },
    {
      icon: Clock3,
      title: 'Horários e Ausência',
      description:
        'Mantenha o atendimento ativo mesmo quando sua equipe estiver fora do expediente.',
    },
  ];

  readonly comunicacao: Feature[] = [
    {
      icon: Megaphone,
      title: 'Campanhas de Transmissão',
      description:
        'Dispare campanhas em massa com templates oficiais aprovados pela Meta.',
    },
    {
      icon: FileText,
      title: 'Modelos Meta',
      description:
        'Gerencie mensagens pré-aprovadas, prontas para campanhas e automações.',
    },
  ];

  readonly gestao: Feature[] = [
    {
      icon: BarChart3,
      title: 'Relatórios',
      description:
        'Acompanhe comunicação, uso e gastos em tempo real, incluindo taxas da Meta.',
    },
    {
      icon: MessagesSquare,
      title: 'Chat Interno',
      description:
        'Comunique sua equipe em grupos ou conversas diretas, independente do WhatsApp.',
    },
  ];

  readonly steps: Step[] = [
    {
      icon: Code2,
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
    },
    {
      icon: Workflow,
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
    },
    {
      icon: Settings2,
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
      imageLabel: 'Painel de gestão / Kanban',
    },
    {
      icon: Rocket,
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
    },
  ];

  readonly trustCards: TrustCard[] = [
    {
      icon: ShieldCheck,
      title: 'API Oficial Meta',
      description: 'Comunicação dentro das políticas oficiais.',
    },
    {
      icon: Lock,
      title: 'Segurança por padrão',
      description: 'Controle de acesso e dados protegidos.',
    },
    {
      icon: Zap,
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
