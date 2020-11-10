<template>
	<div class="container text-center py-5">
		<h1>獨立財務顧問</h1>
		<br />
		<h2>IFA獨立財務顧問的使命</h2>
		<p class="m-0">傳遞人們對家庭的愛與關懷，成為人生價值的基礎</p>
		<p class="m-0">經由需求分析的科學方法，讓家庭責任與財務需求得以量化</p>
		<p class="m-0">
			讓完整的財務安全計劃得以執行，維護人們的生存價值與基本尊嚴
		</p>
		<p class="m-0">使人們免於恐懼、永遠安心、實現夢想、完成希望進而富裕終生</p>
		<!-- <del>對金融生態有點肚爛</del> -->
		<br />
		<h2>預約諮詢</h2>
		<p class="m-0">如果你年過30，對人生目標有一定想法</p>
		<p class="m-0">又有以下症狀之一：</p>
		<p class="m-0">1. 月光族</p>
		<p class="m-0">2. 有想買高價投資課的衝動</p>
		<p class="m-0">3. 手上一堆人情保單不知道保甚麼</p>
		<br />
		<p class="m-0">
			同時願意接受<span class="text-danger">收費式</span>的顧問服務
		</p>
		<p class="m-0">用近一個月薪水的代價</p>
		<p class="m-0">去規劃未來十年甚至一生的財務</p>
		<p class="m-0">而不是去找就是想賣你商品的業務員</p>
		<br />
		<button type="button" class="btn btn-success" @click="openEmail()">
			歡迎寄信給我
		</button>
		<br />
		<p class="m-0 mt-5">但在聯絡之前，作者建議請先把書看完</p>
		<p class="m-0">投資自己是無價且永續的</p>
		<p class="m-0">照書中以及部落格中的內容努力個半年到一年</p>
		<p class="m-0">目標會更明確</p>
		<p class="m-0">經過規劃後也更能事半功倍</p>
		<!-- <p class="m-0">
			<del> 絕對不是因為全方位規劃真的複雜到不想做</del>
		</p> -->
	</div>
</template>
<script>
export default {
	methods: {
		openEmail() {
			window.open('mailto:chuiantw1212@gmail.com')
		}
	}
}
</script>