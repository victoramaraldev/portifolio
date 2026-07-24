<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="project-card" :style="{ '--accent': project.accent }">
    <router-link :to="`/projeto/${project.slug}`" class="project-visual" :class="`visual-${project.visual}`">
      <span class="corner-label">{{ project.category }} / {{ project.year }}</span>
      <v-tooltip :text="`Status atual: ${project.status}`" location="top"><template #activator="{ props }"><span v-bind="props" class="project-status tooltip-target" tabindex="0">{{ project.status }}</span></template></v-tooltip>

      <div v-if="project.cover" class="real-project-frame">
        <img :src="project.cover" :alt="`Interface do projeto ${project.title}`" loading="lazy" />
        <div class="frame-bar"><i></i><i></i><i></i><span>{{ project.title }} / product preview</span></div>
      </div>

      <div v-else-if="project.slug === 'reserva-inteligente'" class="product-mock booking-mock">
        <aside class="booking-sidebar">
          <div class="booking-mark">R<span>•</span></div>
          <small>WORKSPACE</small><b class="selected">▦ &nbsp; Visão geral</b><b>□ &nbsp; Salas</b><b>◷ &nbsp; Reservas</b><b>♙ &nbsp; Usuários</b>
          <div class="user-pill"><i>VA</i><span>Victor<br><small>Administrador</small></span></div>
        </aside>
        <main class="booking-content">
          <header><div><small>QUARTA, 23 JULHO</small><strong>Bom dia, Victor</strong></div><button>+ Nova reserva</button></header>
          <div class="booking-metrics"><div><small>SALAS LIVRES</small><b>08</b><i>de 12 salas</i></div><div><small>RESERVAS HOJE</small><b>14</b><i>próxima às 10:30</i></div><div class="occupancy"><span style="--value:68"><b>68%</b></span><small>OCUPAÇÃO</small></div></div>
          <section class="rooms-card"><div class="rooms-head"><strong>Disponibilidade</strong><span>Hoje⌄</span></div><div class="room-row"><i class="room-color violet"></i><b>Sala Aurora</b><small>8 pessoas</small><em>Livre agora</em></div><div class="room-row"><i class="room-color green"></i><b>Studio 02</b><small>4 pessoas</small><em>Disponível 14:00</em></div><div class="room-row"><i class="room-color orange"></i><b>Auditório</b><small>24 pessoas</small><em>Em uso</em></div></section>
        </main>
      </div>

      <div v-else class="product-mock production-mock">
        <header><div class="industry-brand"><i></i><span>PULSO<strong>INDUSTRIAL</strong></span></div><div class="live-indicator"><i></i> DADOS EM TEMPO REAL</div><div class="operator">VA</div></header>
        <div class="production-body">
          <div class="production-title"><small>LINHA DE PRODUÇÃO / TURNO A</small><strong>Visão operacional</strong><span>23 JUL 2026 &nbsp; 14:32:08</span></div>
          <div class="kpi-grid"><div><small>PRODUÇÃO ATUAL</small><b>8.420</b><em>unidades</em><span>↑ 4,8%</span></div><div><small>EFICIÊNCIA</small><b>94,2</b><em>%</em><span>Meta 92%</span></div><div><small>REFUGO</small><b>1,08</b><em>%</em><span class="warning">↓ 0,3%</span></div></div>
          <section class="production-chart"><div><strong>Produção por hora</strong><small>REALIZADO <i></i> &nbsp; META <i></i></small></div><div class="bar-area"><span v-for="height in [38,52,46,68,61,78,70,88,76,92,82,72]" :key="height" :style="{ height: `${height}%` }"></span><i></i></div><div class="axis"><small>06H</small><small>08H</small><small>10H</small><small>12H</small><small>14H</small><small>16H</small></div></section>
        </div>
      </div>

      <span class="view-project">Ver projeto <i>↗</i></span>
    </router-link>
    <div class="project-info">
      <span class="project-index">{{ project.index }}</span>
      <div><h3>{{ project.title }}</h3><p>{{ project.summary }}</p></div>
      <div class="tech-list"><v-tooltip v-for="item in project.tech" :key="item" :text="`Tecnologia usada no projeto: ${item}`" location="top"><template #activator="{ props }"><span v-bind="props" class="tooltip-target" tabindex="0">{{ item }}</span></template></v-tooltip></div>
    </div>
  </article>
</template>