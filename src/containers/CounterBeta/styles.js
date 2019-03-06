import styled from 'styled-components';

import Square from '../../components/Square';

const styles = {};

styles.Card = styled(Square)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: #642B73;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

styles.Count = styled.div`
  font-size: 35px;
  font-weight: bold;
  padding: 8px;
`

styles.Buttons = styled.div`
  display: flex;
  justify-content: center;
  color: #2193b0;
  font-size: 22px;
  background: white;
  max-width: 100px;
  border-radius: 10px;
`

styles.Button = styled.div`
  padding: 8px;
`

export default styles;