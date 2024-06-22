import { FeatureFlags } from '@/shared/types/featureFlags'

// фичине меняются в сессии
let featureFlag: FeatureFlags

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
	if (newFeatureFlags) {
		featureFlag = newFeatureFlags
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
	return featureFlag[flag]
}
