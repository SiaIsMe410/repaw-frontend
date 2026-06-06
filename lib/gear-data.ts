export type Activity = 'night' | 'trail' | 'frisbee'

export type GearItem = {
  id: string
  name: string
  description: string
  activity: Activity
  emoji: string
  gradientFrom: string
  gradientTo: string
  activityLabel: string
  activityColorClass: string
  wide?: boolean
}

export const gearItems: GearItem[] = [
  {
    id: 'reflective-vest',
    name: '反光运动马甲',
    description: 'Nike 废料再生面料 · 360° 高亮反光条 · 轻量透气 · 快穿快脱',
    activity: 'night',
    emoji: '🌙',
    gradientFrom: '#060a14',
    gradientTo: '#0d1a38',
    activityLabel: '夜跑系列 · 核心款',
    activityColorClass: 'text-blue-300',
    wide: true,
  },
  {
    id: 'trail-boots',
    name: '防滑防护靴',
    description: '耐磨底层 · 防扎刺材料 · 可调节魔术贴',
    activity: 'trail',
    emoji: '🥾',
    gradientFrom: '#0d1a0a',
    gradientTo: '#1c3012',
    activityLabel: '徒步系列',
    activityColorClass: 'text-green-400',
  },
  {
    id: 'sport-harness',
    name: '运动护甲背带',
    description: '弹性伸缩材料 · 关键部位缓冲 · 快干设计',
    activity: 'frisbee',
    emoji: '🥏',
    gradientFrom: '#1f1208',
    gradientTo: '#3a1e05',
    activityLabel: '飞盘系列',
    activityColorClass: 'text-orange-400',
  },
  {
    id: 'led-collar',
    name: 'LED 安全颈圈',
    description: '充电式 LED · 三档亮度 · 轻量防水',
    activity: 'night',
    emoji: '💡',
    gradientFrom: '#141022',
    gradientTo: '#1e1a2e',
    activityLabel: '夜跑系列',
    activityColorClass: 'text-blue-300',
  },
  {
    id: 'trail-pack',
    name: '随行水袋背包',
    description: '可调节肩带 · 独立水袋仓 · 宠物友好人体工学',
    activity: 'trail',
    emoji: '🎒',
    gradientFrom: '#0e0e10',
    gradientTo: '#1a1a22',
    activityLabel: '徒步系列',
    activityColorClass: 'text-green-400',
  },
]
