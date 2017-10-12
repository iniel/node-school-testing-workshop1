'use strict';

/**
 * Валидация даты
 * 
 * @param {Number} month месяц
 * @param {Number} year год
 * @returns {Boolean}
 */
function expiry(month, year) {
	if (!month || !year) {
		return false;
	}

	const now = new Date();
	const expiry = new Date(year, month);

	if (expiry <= now) {
		return false;
	}

	return true;
}

module.exports = expiry;
