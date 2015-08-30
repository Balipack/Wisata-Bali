<!-- jQuery -->
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js' type='text/javascript'/>
<script src='https://cdn.rawgit.com/Balipack/Wisata-Bali/master/jquery.timeago.js' type='text/javascript'/>
<script type='text/javascript'>
jQuery(document).ready(function() {
jQuery(&quot;abbr.timeago&quot;).timeago();
});
jQuery.timeago.settings.strings = {
prefixAgo: null,
prefixFromNow: null,
suffixAgo: &quot;yang lalu&quot;,
suffixFromNow: &quot;dari sekarang&quot;,
seconds: &quot;kurang dari semenit&quot;,
minute: &quot;sekitar satu menit&quot;,
minutes: &quot;%d menit&quot;,
hour: &quot;sekitar sejam&quot;,
hours: &quot;sekitar %d jam&quot;,
day: &quot;sehari&quot;,
days: &quot;%d hari&quot;,
month: &quot;sekitar sebulan&quot;,
months: &quot;%d bulan&quot;,
year: &quot;sekitar setahun&quot;,
years: &quot;%d tahun&quot;
};
</script>
