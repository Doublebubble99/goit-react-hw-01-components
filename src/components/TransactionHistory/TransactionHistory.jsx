import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={clsx(css.tableRow, css.head)}>
          <th className={css.tableTitles}>Type</th>
          <th className={css.tableTitles}>Amount</th>
          <th className={css.tableTitles}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tableRow}>
              <td className={clsx(css.tableData, css.type)}>{type}</td>
              <td className={css.tableData}>{amount}</td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
