import {connect} from 'react-redux';
import DownloadButton from 'components/Modules/DownloadButton';

const mapStateToProps = (state, ownProps) => {
  return {
    block: state.AnalysisEditPage.Analysis.data.blocks[ownProps.moduleIndex]
  }
}

const DownloadButtonContainer = connect(mapStateToProps)(DownloadButton)

export default DownloadButton;
