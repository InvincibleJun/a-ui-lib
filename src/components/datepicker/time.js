/**
 * 获取当前月份日期排列
 * @param {*} year 当前年份
 * @param {*} month 当前月份
 */
export const getMonthAllDays = function(year, month) {

  // 设置初始时间，当月最后一天
  const date = new Date();

  // 获得当月天数
  const curMonthDays = getConutDay(year, month, date);

  // 当月首尾日
  const lastDay = date.getDay();

  const fristDay = getFirstDay(date);


  // 获取上个月天数
  const lastYear = month === 1 ? year - 1 : year;

  const lastMonth = month === 1 ? 12 : month - 1;

  const lastMonthDays = getConutDay(lastYear, lastMonth, date);

  const result = [];


  // 日期前补
  for (let i = fristDay; i > 0; i--) {
    const day = lastMonthDays - i + 1;

    result.push({
      day,
      month: 'prev'
    });
  }

  // 遍历
  for (let i = 1; i < curMonthDays + 1; i++) {
    result.push({
      day: i,
      month: 'now'
    });
  }

  // 日期后补
  for (let i = 1; i < 7 - lastDay; i++) {
    result.push({
      day: i,
      month: 'next'
    });
  }

  // 默认六行，后补单行
  if (result.length === 35) {
    for (let i = 1; i <= 7; i++) {
      const day = result[34].day > 27 ? i : result[34].day + i;

      result.push({
        day,
        month: 'next'
      });
    }
  }

  return result;
};

/**
 * 获得单月总天数
 * @param {*} year
 * @param {*} month
 * @param {*} date
 */
function getConutDay(year, month, date) {
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(0);

  return date.getDate();
}

/**
 * 获得首日
 * @param {*} day
 * @param {*} count
 */
function getFirstDay(date) {
  date.setDate(1);

  return date.getDay();
}

/**
 * 返回近10年
 * @param {*} year
 */
export const getAboutYears = function(year) {

  // 基数年
  const y = year - year % 10,
        result = [];

  for (let i = 0; i < 10; i++) {
    result.push(y + i);
  }

  return result;
};

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];


/**
 * 返回12个月
 */
export const getAllMonth = function(month) {
  return months;
};
