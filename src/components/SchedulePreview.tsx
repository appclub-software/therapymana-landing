/**
 * Static, decorative mock of the booking schedule used as the hero visual.
 * Purely presentational — the grid is hidden from assistive tech.
 */

type Tone = 'emerald' | 'sage' | 'sky' | 'amber';

type Booking = {
  therapist: number; // column index
  start: number; // hours from 10:00
  length: number; // hours
  service: string;
  client: string;
  tone: Tone;
};

const THERAPISTS = [
  { name: 'Anna', initials: 'AN' },
  { name: 'Mai', initials: 'MA' },
  { name: 'Kim', initials: 'KI' },
];

const HOURS = ['10:00', '11:00', '12:00', '13:00', '14:00'];

const BOOKINGS: Booking[] = [
  { therapist: 0, start: 0, length: 1.5, service: 'Thai Massage', client: 'Sarah L.', tone: 'emerald' },
  { therapist: 0, start: 2.5, length: 1, service: 'Hot Stone', client: 'Ken W.', tone: 'amber' },
  { therapist: 1, start: 0.5, length: 1, service: 'Aromatherapy', client: 'Julia P.', tone: 'sage' },
  { therapist: 1, start: 2, length: 1.5, service: 'Deep Tissue', client: 'Marco R.', tone: 'emerald' },
  { therapist: 2, start: 1, length: 0.75, service: 'Foot Reflexology', client: 'Amy T.', tone: 'sky' },
  { therapist: 2, start: 3, length: 1, service: 'Facial & Massage', client: 'Nina S.', tone: 'sage' },
];

const TONES: Record<Tone, string> = {
  emerald: 'border-l-emerald-500 bg-emerald-50 text-emerald-900',
  sage: 'border-l-teal-500 bg-teal-50 text-teal-900',
  sky: 'border-l-sky-500 bg-sky-50 text-sky-900',
  amber: 'border-l-amber-500 bg-amber-50 text-amber-900',
};

const ROW_HEIGHT = 56; // px per hour

const SUMMARY = [
  { label: 'Revenue', value: '$1,240' },
  { label: 'Commissions', value: '$372' },
  { label: 'Payout', value: 'Locked' },
];

export function SchedulePreview() {
  return (
    <div className="relative">
      {/* Soft glow behind the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-emerald-200/60 via-teal-100/40 to-transparent blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
          </div>
          <p className="truncate text-xs font-medium text-slate-600">Today · Downtown Branch</p>
          <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
            6 bookings
          </span>
        </div>

        {/* Schedule grid */}
        <div className="p-3 sm:p-4" aria-hidden="true">
          <div className="grid grid-cols-[2.75rem_repeat(3,minmax(0,1fr))] gap-x-1.5 sm:grid-cols-[3rem_repeat(3,minmax(0,1fr))] sm:gap-x-2">
            <div />
            {THERAPISTS.map((t) => (
              <div key={t.name} className="flex items-center gap-2 pb-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-semibold text-slate-700">
                  {t.initials}
                </span>
                <span className="truncate text-xs font-semibold text-slate-900">{t.name}</span>
              </div>
            ))}
          </div>

          <div className="relative grid grid-cols-[2.75rem_repeat(3,minmax(0,1fr))] gap-x-1.5 sm:grid-cols-[3rem_repeat(3,minmax(0,1fr))] sm:gap-x-2">
            <div>
              {HOURS.map((h) => (
                <div key={h} style={{ height: ROW_HEIGHT }} className="-mt-2 text-[10px] text-slate-500">
                  {h}
                </div>
              ))}
            </div>
            {THERAPISTS.map((t, col) => (
              <div key={t.name} className="relative" style={{ height: ROW_HEIGHT * HOURS.length }}>
                {HOURS.map((h, i) => (
                  <div
                    key={h}
                    className="absolute inset-x-0 border-t border-dashed border-slate-200"
                    style={{ top: i * ROW_HEIGHT }}
                  />
                ))}
                {BOOKINGS.filter((b) => b.therapist === col).map((b) => (
                  <div
                    key={b.service + b.client}
                    className={`absolute inset-x-0 overflow-hidden rounded-md border-l-[3px] px-1.5 py-1.5 shadow-xs sm:px-2 ${TONES[b.tone]}`}
                    style={{ top: b.start * ROW_HEIGHT + 2, height: b.length * ROW_HEIGHT - 4 }}
                  >
                    <p className="truncate text-[11px] leading-tight font-semibold">{b.service}</p>
                    <p className="truncate text-[10px] leading-tight opacity-75">{b.client}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Daily summary footer */}
        <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 bg-slate-50/60">
          {SUMMARY.map((s) => (
            <div key={s.label} className="px-3 py-3 sm:px-4">
              <p className="text-[10px] font-medium tracking-wide text-slate-600 uppercase">{s.label}</p>
              <p className="text-sm font-semibold text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
