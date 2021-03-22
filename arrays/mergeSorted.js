var merge = function(nums1, m, nums2, n) {
    for (let idx = m; idx < m+n; idx++) {
            nums1[idx] = nums2.shift();
    }
    return nums1.sort((a,b) => a-b);
};