# referal-plan

- 无痛增加奈飞帐户合租的功能，用户使用更顺畅

### SSPanel V3 Uim 接入指南

修改面板文件 [resources/views/material/user/main.tpl](https://github.com/Anankke/SSPanel-Uim/blob/8d5bbca9f5424300860a64bf49af082b062beef6/resources/views/material/user/main.tpl#L148)　在 148 行后面添加一行以下内容：

```
<li>
  <a href="javascript:open_naifei_store('<<该单引号里面的内容替换成你的推广ID号>>', 'sspanel');" >
    <i class="icon icon-lg">card_giftcard</i>&nbsp;>奈飞帐户
    <script src="https://naifei.store/referal-plan-js"></script>
  </a>
</li>
```
