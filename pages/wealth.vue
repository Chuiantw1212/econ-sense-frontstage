<template>
	<div class="container text-center py-5">
		<h1>被動投資金錢</h1>
		<p>時間是朋友，而積極不是</p>
		<hr />
		<h2>資產配置</h2>
		<p class="m-0">長期持有的投資組合都至少該包含2成的債券、6成的股票</p>
		<br />
		<table class="table table-bordered">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">50%</th>
					<th scope="col">40%</th>
					<th scope="col">10%</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>標的</th>
					<td>全球多重資產基金</td>
					<td>台灣指數型ETF</td>
					<td>P2P借貸</td>
				</tr>
				<tr>
					<th>理由</th>
					<td>境外基金不課稅</td>
					<td>
						<p class="m-0">長期績效勝過國內2/3基金</p>
						<p class="m-0">無匯率風險</p>
					</td>
					<td>
						<p class="m-0">投資獲利來自於解決問題</p>
						<p class="m-0">金融也可以很有溫度</p>
					</td>
				</tr>
				<tr>
					<th>建議通路</th>
					<td>中租投顧</td>
					<td>
						<p class="m-0">投資帳戶下單</p>
						<p class="m-0">0050 or 006208</p>
					</td>
					<td>
						<p class="m-0">LnB信用市集</p>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- <p class="m-0">偏好低波動的話，可以用全球債券基金取代全球多重資產基金</p>
		<p class="m-0">新手可以挑有月配的，存起來比較有感覺</p> -->
		<hr />
		<br />
		<h2>通路與訊息</h2>
		<br />
		<div class="row">
			<div class="col-12 col-lg-4">
				<h3>智富台灣基金獎</h3>
				<p class="m-0">
					<a
						href="https://www.google.com/search?q=智富台灣基金獎"
						target="_blank"
					>
						智富台灣基金獎
					</a>
					是含金量算最高的基金評選
				</p>
				<p class="m-0">沒有通通有獎的行銷成分，獎項區分也足夠細緻</p>
				<p class="m-0">裡面所獲獎的"全球多重資產基金"</p>
				<p class="m-0">很適合作為存基金的初始標的</p>
				<p class="m-0">偏好低波動的話</p>
				<p class="m-0">可以用全球債券基金取代</p>
				<a
					href="https://www.google.com/search?q=智富台灣基金獎"
					target="_blank"
				>
					<img
						src="https://storage.googleapis.com/my-blog-287510.appspot.com/wealth/smart.jpg"
					/>
				</a>
			</div>
			<div class="col-12 col-lg-4">
				<h3>中租投顧</h3>
				<p class="m-0">
					<a href="https://bb.ezfunds.com.tw/" target="_blank"> 中租投顧 </a>
					是業界最為投資人著想的投顧了
				</p>
				<p class="m-0">願意把基金公司不想公開的Alpha值大方擺上</p>
				<p class="m-0">那怕能申購的基金比較少</p>
				<p class="m-0">也能保證找到優秀的基金</p>
				<p class="m-0">絕對值得長期往來</p>
				<p class="m-0">開戶完成後</p>
				<p class="m-0">
					<button class="btn btn-danger" @click="openEmail()">聯絡我</button>
				</p>
				<p class="m-0">可以獲得888點的手續費折抵(1點1元)</p>
				<br />
				<a href="https://bb.ezfunds.com.tw/" target="_blank">
					<img
						src="https://storage.googleapis.com/my-blog-287510.appspot.com/wealth/ez.jpg"
					/>
				</a>
			</div>
			<div class="col-12 col-lg-4">
				<h3>LnB信用市集</h3>
				<p class="m-0">
					<a
						href="https://www.lnb.com.tw/activity/mgm/1/CGBY113/1161359209"
						target="_blank"
					>
						Lnb信用市集
					</a>
					是我認為最好的P2P借貸平台
				</p>
				<p class="m-0">不斷的擴充選項給投資人</p>
				<p class="m-0">從工程師角度來看</p>
				<p class="m-0">自動下單的蘿菠投方案</p>
				<p class="m-0">更是大舉把其他平台給甩在後面</p>
				<br />
				<a
					href="https://www.lnb.com.tw/activity/mgm/1/CGBY113/1161359209"
					target="_blank"
				>
					<img
						class="col-8 col-lg-12"
						src="https://storage.googleapis.com/my-blog-287510.appspot.com/wealth/Lnb-logo-2.jpg"
					/>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		openEmail() {
			window.open('mailto:chuiantw1212jobs@gmail.com')
		}
	}
}
</script>