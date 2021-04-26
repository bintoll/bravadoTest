import {Platform} from 'react-native'

export const isAndroid = (): boolean => Platform.OS === 'android'

export const isIos = (): boolean => Platform.OS === 'ios'

export const caseIosOrAndroid = <CaseIos, CaseAndroid>(
  caseIos: CaseIos,
  caseAndroid: CaseAndroid,
): CaseIos | CaseAndroid => (isIos() ? caseIos : caseAndroid)
