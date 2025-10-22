<template>
  <!-- Content -->
  <s-content>
    <!-- Hero Section -->
    <s-section-hero-basic
      :props="{
        title: 'DietManager',
        subtitle: 'AI-Powered Diet Management System',
        description: 'Track your nutrition, plan your meals, and achieve your dietary goals with intelligent assistance.',
        image: {
          url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600',
          title: 'Healthy Food'
        },
        buttons: [
          {
            text: 'Browse Meals',
            link: '/menu-grid-navigation',
            type: 'primary'
          },
          {
            text: 'Track Nutrition',
            link: '/menu-list-navigation',
            type: 'outline-primary'
          }
        ]
      }"
    />

    <!-- Categories Section -->
    <s-section-categories
      :props="{
        title: 'Meal Categories',
        subtitle: 'Choose from our variety of healthy options',
        categories: menuCategories
      }"
    />

    <!-- Featured Items Section -->
    <s-section
      :props="{
        title: 'Featured Meals',
        subtitle: 'Popular choices for a balanced diet',
        theme: 'light'
      }"
    >
      <b-container>
        <b-row>
          <b-col v-for="item in featuredItems" :key="item.id" lg="4" class="mb-4">
            <s-menu-grid-item :item="item" />
          </b-col>
        </b-row>
      </b-container>
    </s-section>

    <!-- Features Section -->
    <s-section-double
      :content="{
        title: 'Smart Diet Tracking',
        description: 'Our intelligent system helps you maintain a healthy diet with personalized recommendations and real-time nutrition analysis.'
      }"
      :image="{
        url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800',
        title: 'Nutrition Tracking'
      }"
    />
  </s-content>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SSection: () => import('@/components/SSection/SSection'),
    SSectionHeroBasic: () => import('@/components/SSection/SSectionHeroBasic'),
    SSectionCategories: () => import('@/components/SSection/SSectionCategories'),
    SSectionDouble: () => import('@/components/SSection/SSectionDouble'),
    SMenuGridItem: () => import('@/components/SMenu/SMenuGridItem')
  },
  computed: {
    ...mapState('menu', ['items']),
    ...mapGetters('menu', ['categories']),
    menuCategories() {
      const cats = Array.isArray(this.categories) ? this.categories : []
      return cats.slice(0, 6).map(cat => ({
        ...cat,
        link: '/menu-grid-navigation'
      }))
    },
    featuredItems() {
      const items = Array.isArray(this.items) ? this.items : []
      return items.slice(0, 3)
    }
  },
  head() {
    return {
      title: 'DietManager - AI-Powered Diet Management',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Track your nutrition, plan meals, and achieve dietary goals with AI-powered recommendations.'
        }
      ]
    }
  }
}
</script>