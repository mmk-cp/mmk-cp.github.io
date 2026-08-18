'use strict';

/*
 * Jalali (Solar Hijri) calendar helpers.
 * Gregorian <-> Jalali conversions via the 33-year cycle algorithm.
 * All functions work with 1-indexed months.
 */

var JALALI_EPOCH = 1948321; // JDN of 622-03-22 (Julian) - start of Jalali calendar

function div(a, b) { return Math.floor(a / b); }
function mod(a, b) { return a - Math.floor(a / b) * b; }

/* Gregorian to Julian Day Number */
function gregorianToJdn(gy, gm, gd) {
  var a = div(14 - gm, 12);
  var y = gy + 4800 - a;
  var m = gm + 12 * a - 3;
  return gd + div(153 * m + 2, 5) + 365 * y + div(y, 4) - div(y, 100) + div(y, 400) - 32045;
}

/* Julian Day Number to Gregorian */
function jdnToGregorian(jdn) {
  var a = jdn + 32044;
  var b = div(4 * a + 3, 146097);
  var c = a - div(146097 * b, 4);
  var d = div(4 * c + 3, 1461);
  var e = c - div(1461 * d, 4);
  var m = div(5 * e + 2, 153);
  var day = e - div(153 * m + 2, 5) + 1;
  var month = m + 3 - 12 * div(m, 10);
  var year = b * 100 + d - 4800 + div(m, 10);
  return { gy: year, gm: month, gd: day };
}

/* Jalali to Julian Day Number */
function jalaliToJdn(jy, jm, jd) {
  var epbase = jy - (jy >= 0 ? 474 : 473);
  var epyear = 474 + mod(epbase, 2820);
  return jd
    + (jm <= 7 ? (jm - 1) * 31 : (jm - 1) * 30 + 6)
    + div(epyear * 682 - 110, 2816)
    + (epyear - 1) * 365
    + div(epbase, 2820) * 1029983
    + (JALALI_EPOCH - 1);
}

/* Julian Day Number to Jalali */
function jdnToJalali(jdn) {
  var depoch = jdn - jalaliToJdn(475, 1, 1);
  var cycle = div(depoch, 1029983);
  var cyear = mod(depoch, 1029983);
  var ycycle;
  if (cyear === 1029982) ycycle = 2820;
  else {
    var aux1 = div(cyear, 366);
    var aux2 = mod(cyear, 366);
    ycycle = div(2134 * aux1 + 2816 * aux2 + 2815, 1028522) + aux1 + 1;
  }
  var jy = ycycle + 2820 * cycle + 474;
  if (jy <= 0) jy -= 1;
  var yday = jdn - jalaliToJdn(jy, 1, 1) + 1;
  var jm, jd;
  if (yday <= 186) { jm = Math.ceil(yday / 31); jd = yday - (jm - 1) * 31; }
  else { jm = Math.ceil((yday - 6) / 30); jd = yday - 6 - (jm - 1) * 30; }
  return { jy: jy, jm: jm, jd: jd };
}

function gregorianToJalali(gy, gm, gd) {
  return jdnToJalali(gregorianToJdn(gy, gm, gd));
}

/* ---------- Display helpers ---------- */

var EN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var FA_MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

/* Parse "YYYY-MM" or "YYYY-MM-DD" */
function parseISODate(s) {
  if (!s) return null;
  var parts = s.split('-');
  return { y: parseInt(parts[0], 10), m: parseInt(parts[1], 10), d: parts[2] ? parseInt(parts[2], 10) : 1 };
}

/* English: "Jul 2025"  — Gregorian */
function formatDateEn(iso) {
  if (!iso) return 'Present';
  var p = parseISODate(iso);
  return EN_MONTHS[p.m - 1] + ' ' + p.y;
}

/* Persian: "تیر ۱۴۰۴" — Jalali */
function formatDateFa(iso) {
  if (!iso) return 'اکنون';
  var p = parseISODate(iso);
  var j = gregorianToJalali(p.y, p.m, p.d);
  var faYear = String(j.jy).replace(/\d/g, function(d) { return '۰۱۲۳۴۵۶۷۸۹'[d]; });
  return FA_MONTHS[j.jm - 1] + ' ' + faYear;
}

/* Range: "Dec 2023 — Jun 2025" / "آذر ۱۴۰۲ تا خرداد ۱۴۰۴"  */
function formatRangeFa(startISO, endISO) {
  var s = formatDateFa(startISO);
  var e = endISO ? formatDateFa(endISO) : 'اکنون';
  return s + ' تا ' + e;
}
function formatRangeEn(startISO, endISO) {
  var s = formatDateEn(startISO);
  var e = endISO ? formatDateEn(endISO) : 'Present';
  return s + ' — ' + e;
}

/* Public: format by lang */
function formatRange(lang, startISO, endISO) {
  return lang === 'fa' ? formatRangeFa(startISO, endISO) : formatRangeEn(startISO, endISO);
}

/* Single date label for a project year */
function formatProjectYear(lang, year) {
  if (lang === 'fa') {
    // Use mid-year (July) as representative for a year-only label,
    // so 2026 maps to 1405, matching the convention used elsewhere.
    var j = gregorianToJalali(year, 7, 1);
    var jy = String(j.jy).replace(/\d/g, function(d) { return '۰۱۲۳۴۵۶۷۸۹'[d]; });
    return jy;
  }
  return String(year);
}
